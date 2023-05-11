

const searchHandler = async (event) => {
  const searchItem = document.querySelector("#search").value.trim();
  const response = await fetch(`/api/item`);
  const itemData = await response.json();
const searchedItems = itemData.itemData
  const autocomplete = new autoComplete({
    selector: "#search",
    data: {
      src: searchedItems,
      keys: ["name"],
      cache: true
    },
    event: {
            input: {
              focus: (event) => {
                console.log("Input Field in focus!");
              }
            },
            list: {
              scroll: (event) => {
                console.log("Results List scrolled!");
              }
            },
            selection: (event) => {
                const selectedValue = event.detail.selection.value;
                document.querySelector("#search").value = selectedValue;
              },
        },
    
    threshold: 1,
    searchEngine: 'loose',
    resultsList: {
        tag: "ul",
        id: "autoComplete_list",
        class: "results_list",
        position: "afterend",
        maxResults: 5,
        noResults: true,
        tabSelect: true,
        element: (list, data) => {
            if (!data.results.length) {
                console.log('no data')
            }
        },
    },
    resultItem: {
        highlight: true,
    },
   
    submit:false
  });

autocomplete.init()
};



searchHandler()