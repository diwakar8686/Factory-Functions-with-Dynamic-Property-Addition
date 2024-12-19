function createInventoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        },
    };
}
function addItemDiscount(inventoryItem, discountPercent) {
    const discountedItem = {
        ...inventoryItem,
        discountPercent,
        discountedPrice: inventoryItem.price * (1 - discountPercent / 100),
        applyDiscount() {
            console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
        },
    };
    return discountedItem;
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount(); 