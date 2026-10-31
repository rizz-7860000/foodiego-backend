const MenuItem = require("../models/MenuItem");
const Restaurant = require("../models/Restaurant");

// CREATE MENU ITEM
exports.createMenuItem = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            imageUrl,
            restaurant
        } = req.body;

        const restaurantExists = await Restaurant.findById(restaurant);

        if (!restaurantExists) {
            return res.status(404).json({
                success: false,
                message: "Restaurant not found"
            });
        }

        const menuItem = await MenuItem.create({
            name,
            description,
            price,
            category,
            imageUrl,
            restaurant
        });

        res.status(201).json({
            success: true,
            data: menuItem
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL MENU ITEMS
exports.getMenuItems = async (req, res) => {
    try {
        const {
            restaurantId,
            category,
            isAvailable,
            sort,
            page = 1,
            limit = 10
        } = req.query;

        const filter = {};

        if (restaurantId) {
            filter.restaurant = restaurantId;
        }

        if (category) {
            filter.category = category;
        }

        if (isAvailable !== undefined) {
            filter.isAvailable = isAvailable === "true";
        }

        let sortOption = {};

        if (sort === "price") {
            sortOption.price = 1;
        } else if (sort === "-price") {
            sortOption.price = -1;
        }

        const skip = (Number(page) - 1) * Number(limit);

        const menuItems = await MenuItem.find(filter)
            .populate("restaurant")
            .sort(sortOption)
            .skip(skip)
            .limit(Number(limit));

        const total = await MenuItem.countDocuments(filter);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / Number(limit)),
            data: menuItems
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE MENU ITEM
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({
                success: false,
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            success: true,
            data: menuItem
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid menu item ID"
        });
    }
};


// UPDATE MENU ITEM
exports.updateMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!menuItem) {
            return res.status(404).json({
                success: false,
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            success: true,
            data: menuItem
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// DELETE MENU ITEM
exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!menuItem) {
            return res.status(404).json({
                success: false,
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Menu item deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid menu item ID"
        });
    }
};