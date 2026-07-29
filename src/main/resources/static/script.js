const PRODUCT_API = "http://localhost:8080/api/products";
const CATEGORY_API = "http://localhost:8080/api/categories";

let editingId = null;


window.onload = function () {

    loadProducts();
    loadCategories();

};


function loadProducts() {

    fetch(PRODUCT_API)

        .then(res => res.json())

        .then(products => {

            let table = document.getElementById("productTable");

            table.innerHTML = "";

            products.forEach(product => {

                table.innerHTML += `

               <tr>

                    <td>${product.id}</td>

                    <td>${product.name}</td>

                    <td>${product.category.name}</td>

                    <td>${product.price}</td>

                    <td>${product.stock}</td>

                    <td>

                        <button
                        class="btn btn-primary btn-sm edit-btn"
                        onclick="editProduct(${product.id})">

                        <i class="fa-solid fa-pen"></i>

                        </button>

                        <button
                        class="btn btn-danger btn-sm"
                        onclick="deleteProduct(${product.id})">

                        <i class="fa-solid fa-trash"></i>

                        </button>

                    </td>

                </tr>

                `;

            });

        });

}


function loadCategories() {

    fetch(CATEGORY_API)

        .then(res => res.json())

        .then(categories => {

            let select = document.getElementById("category");

            select.innerHTML =
                `<option value="">Select Category</option>`;

            categories.forEach(category => {

                select.innerHTML +=

                `<option value="${category.id}">
                    ${category.name}
                </option>`;

            });

        });

}


document.getElementById("productForm")
.addEventListener("submit", saveProduct);

function saveProduct(e) {

    e.preventDefault();

    const product = {

        name: document.getElementById("name").value,

        description: document.getElementById("description").value,

        price: Number(document.getElementById("price").value),

        stock: Number(document.getElementById("stock").value),

        category: {

            id: Number(document.getElementById("category").value)

        }

    };

    let url = PRODUCT_API;

    let method = "POST";

    if (editingId != null) {

        url = PRODUCT_API + "/" + editingId;

        method = "PUT";

    }

    fetch(url, {

        method: method,

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(product)

    })

    .then(res => res.json())

    .then(() => {

        alert(editingId == null
            ? "Product Added Successfully"
            : "Product Updated Successfully");

        clearForm();

        loadProducts();

    });

}


function editProduct(id) {

    fetch(PRODUCT_API + "/" + id)

        .then(res => res.json())

        .then(product => {

            editingId = product.id;

            document.getElementById("productId").value = product.id;

            document.getElementById("name").value = product.name;

            document.getElementById("description").value =
                product.description;

            document.getElementById("price").value =
                product.price;

            document.getElementById("stock").value =
                product.stock;

            document.getElementById("category").value =
                product.category.id;

            document.getElementById("formTitle")
                .innerText = "Edit Product";

            document.getElementById("saveBtn")
                .innerText = "Update";

            document.getElementById("productForm")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

}


function deleteProduct(id) {

    if (!confirm("Delete this product?")) {

        return;

    }

    fetch(PRODUCT_API + "/" + id, {

        method: "DELETE"

    })

    .then(res => res.text())

    .then(() => {

        alert("Product Deleted");

        loadProducts();

        clearDetails();

    });

}

document.getElementById("cancelBtn")
.addEventListener("click", clearForm);

function clearForm() {

    editingId = null;

    document.getElementById("productForm").reset();

    document.getElementById("formTitle")
        .innerText = "Add Product";

    document.getElementById("saveBtn")
        .innerText = "Save";

}

function searchProduct() {

    let id = document.getElementById("searchId").value;

    if (id === "") {

        alert("Please enter Product ID");

        return;

    }

    fetch(PRODUCT_API + "/" + id)

        .then(response => {

            if (!response.ok) {

                throw new Error("Product Not Found");

            }

            return response.json();

        })

        .then(product => {

            document.getElementById("detailId").innerHTML = product.id;
            document.getElementById("detailName").innerHTML = product.name;
            document.getElementById("detailCategory").innerHTML = product.category.name;
            document.getElementById("detailPrice").innerHTML = product.price;
            document.getElementById("detailStock").innerHTML = product.stock;
            document.getElementById("detailDescription").innerHTML = product.description;

        })

        .catch(() => {

            alert("Product Not Found");

            clearDetails();

        });

}


function clearDetails(){

    document.getElementById("detailId").innerHTML="-";

    document.getElementById("detailName").innerHTML="-";

    document.getElementById("detailCategory").innerHTML="-";

    document.getElementById("detailPrice").innerHTML="-";

    document.getElementById("detailStock").innerHTML="-";

    document.getElementById("detailDescription").innerHTML="-";

}


document.getElementById("backBtn")
.addEventListener("click",function(){

    clearDetails();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});