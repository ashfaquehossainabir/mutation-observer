const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
});

const parent = document.querySelector(".parent");

mutationObserver.observe(parent, { // parent.children[0].childNodes[0]
    subtree: true,
    // attributes: true,
    // childList: true,
    // attributeOldValue: true,
    // attributeFilter: ["id"],
    characterData: true,
    characterDataOldValue: true
});

// mutationObserver.disconnect();

// parent.children[0].remove();

// setTimeout(() => {
//     parent.appendChild(document.createElement("div"));
// }, 100);

// parent.id = "New Id";
// parent.children[0].id = "New id";