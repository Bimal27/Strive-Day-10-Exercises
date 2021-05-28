   // 31) Get element with ID "container" from the page//
   document.getElementById("container")


    //32) Get every "td" from the page//
    document.querySelectorAll("td")

    //33) Create a cycle that prints the text inside every td of the page

    //34) Write a function to change the heading of the page//
    const changeHeading = function (newHeading) {
        let h1 = document.getElementsByTagName("h1")[0]
        h1.innerText = "This is my first page."
      }

    //35) Write a function to add an extra row to the table
    const extraRow = function () {
        let newRow = document.createElement("th")
        newRow.innerText = ""
        document.querySelector("tr").appendChild(newRow)
      }
      extraRow()
    //36) Write a function to add the class "test" to each row in the table

    const addClassToRow = function () {
        let newTh = document.querySelectorAll("th")
        nweTh.classList.add("test")
      }
      addClassToRow()

    //37) Write a function to add a red background to every link in the page
    const addColor = function () {
        let link =document.querySelectorAll("a")
        link.style.background = "red"
      }
    //38) Console log "Page loaded" when the page is correctly loaded

    //39) Write a function to add new items to a UL
    const addNewItems = function () {
        let newItem1 = document.getElementTagName("ul")
        let newItem = document.createElement("li")
        newItem.innerText = 4
        newItem1.appendChild(newItem)
      }
      addNewItems()
    //40) Write a function to empty a list