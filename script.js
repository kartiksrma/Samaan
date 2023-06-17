import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://samaan-ede7b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "items")

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const itemsList = document.getElementById("items-list");

onValue(itemsInDB, function (snapshot) {

    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        console.log(snapshot.val())

        clearItemsList()

        for (let index = 0; index < itemsArray.length; index++) {
            let currentItem = itemsArray[index]
            let currentItemId = itemsArray[index][0]
            let currentItemValue = itemsArray[index][1]
            appendItemsToItemsList(currentItem);
        }
    }
    else {
        itemsList.innerHTML = "<p>No items here...yet</p>"
    }

})

addButton.addEventListener("click", function () {
    let inputValue = inputField.value;
    push(itemsInDB, inputValue)
    console.log(`${inputValue} added to database`);
    clearInputFieldEl()
})

function clearItemsList() {
    itemsList.innerHTML = ""
}

function clearInputFieldEl() {
    inputField.value = ""
}
function appendItemsToItemsList(item) {

    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("click", function () {
        let exactLocationOfItemInDB = ref(database, `items/${itemID}`)

        remove(exactLocationOfItemInDB)
    })


    itemsList.append(newEl)
}


