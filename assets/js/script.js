// $("#space").on("click", function (event) {
// 	event.preventDefault();
// 	var searchTerm = $("#searchTerm").val();
// 	myFunction(searchTerm);
// });

function myFunction() {
var searchTerm = document.querySelector('#searchTerm').value;
var images = {};
    //APIs for nasa image/video searches
    fetch(
        'https://images-api.nasa.gov/search?q=' + searchTerm 
    )
    .then(function(nasaResponse){
        console.log(nasaResponse);
        console.log('test');
        return nasaResponse.json();
    })
    .then(data => {images=data;
        var seePic = document.createElement("span");
        var spaceImg = document.createElement('img');
        seePic.appendChild(spaceImg);
         spaceImg.setAttribute('src', data.collection.items[9].links[0].href);
         document.querySelector('#text-banner').appendChild(seePic);
        console.log(data.collection.items[0].links[0].href);
		
		wikiSearch(searchTerm);

    })
    .catch(err => console.error(err));

	
    }

	function wikiSearch(searchTerm) {
		//Api for Wiki article
		fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=" + searchTerm)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
			var wikiCard = $("<div>").addClass("card-wiki");
			var planetTitle = $("<h1>").addClass("card-title").text(data.query.search[0].title);
			var planetCardBody = $("<div>").addClass("card-body");
     		var planetArticle = $("<p>").addClass("article-Text").text(data.query.search[0].snippet);
			 
			 planetCardBody.append(planetTitle, planetArticle);
			 wikiCard.append(planetCardBody);
			 $("#response-wiki").append(wikiCard);

		});
		
	}
	
      
      
        // getSpace(function(){
        //     Object.keys(images).forEach((key) =>{
        //         if(images[key].indexOf(findText)!== -1){
        //     var seePic = document.createElement("span");
        //     var spaceImg = document.createElement('img');
        //     spaceImg.setAttribute('src', images[key]);
        //     console.log(images[key]);
        //     seePic.appendChild(spaceImg);
        //     document.querySelector('#response-Nasa').appendChild(seePic);
        //         }
        //     });
        // },0);

    // console.log(nasaResponse);

        // var responseContain = document.querySelector('#response-Nasa');

        // responseContain.innerHTML = '';

        // var spaceImg = document.createElement('img');
        // spaceImg.setAttribute('src', nasaResponse.collection.links.data["href"]);
        // console.log(spaceImg);

        // respondContain.appendChild(spaceImg);

//universal variables
// $("#birthday").datepicker({dateFormat: "mm/dd/yyyy"});
// var getInput= $("#birthday").datepicker().val();
// console.log(getInput);
// // function for saving data
// function saveDate() {
//     var getInput =$("#birthday").datepicker().val();
//     console.log(getInput);
//     var selectDate = ($(getInput).text().split("/")[3]);
//     console.log(selectDate);
// }
// saveDate();

//function for rendering night mode ((more on the css side))
    $("#space").click(function() {
        //storage of birthdates in this format MM/DD/YYYY
        myFunction();
        const search = $(this).siblings("#searchTerm").val();
        console.log(search);
        localStorage.setItem("searchTerm",search);

        $("#main-header").hide();
        $("#sub-header").hide();
         $("#dub-header").hide();
        $("#birthday").hide();
        // $("#next-title").hide();
        $("#next-title").show();
        $("#next-header").show();
        $("response-song").show();
        $("#nextBtn").show();
    });

    $("#space").click(function(){});

function getArt() {

};
//function for rendering night mode ((more on the css side))
//generate music videos or album covers
//display movie posters

