const photos = ["resources/photo1.jpg", "resources/photo2.jpg", "resources/photo3.jpg", "resources/photo4.jpg", "resources/photo5.jpg", "resources/photo6.jpg"];

const titles = ["Пчела и пёс", "Собака кусает девочку", "Крокодил ест рыбу", "Белка теряет орех", "Лама вместо лица", "Чайка ворует еду"];

function tableCreate() {
	var body = document.body,
		tbl  = document.createElement("table");
	tbl.style.width  = "100px";
	tbl.style.border = "1px solid black";
	
	for (var i = 0; i < 3; i++) {
		var tr = tbl.insertRow();
		for (var j = 0; j < 6; j++) {
			if ((i == 2) && (j > 3)) {
				break;
			}
			var td = tr.insertCell();
			var img = new Image();
			img.src = photos[j];
			img.className = "photoInAlbum";
			img.title = titles[j];
			img.alt = titles[j];
			td.appendChild(img);
			var imageText = titles[j];
			td.appendChild(document.createTextNode(imageText));
		}
	}
	body.appendChild(tbl);
}

document.addEventListener('DOMContentLoaded', function() {
	tableCreate();
});