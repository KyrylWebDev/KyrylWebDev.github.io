
	var createObj = {

		name: "creatingObjects",

		createTitle: function() {
			var title = document.createElement("h1");
			title.className = "head_title";
			title.innerHTML = "Тест по программированию";
			title.style.textAlign = "center";
			title.style.marginBottom = "50px";

			document.body.appendChild(title);
		},

		createList: function() {

			for (var g = 1; g < 4; g++) {
			
			var listTitle = document.createElement("h3");
			listTitle.className = "list_title";
			listTitle.innerHTML = g + ". Вопрос №" + g;
			listTitle.style.marginLeft = "300px";
			document.body.appendChild(listTitle);

			var divVar = document.createElement("div");
			divVar.style.width = "165px";
			divVar.style.marginLeft = "350px";
			document.body.appendChild(divVar);

			

			for (var i = 1; i < 4; i++) {

			var divChild = document.createElement("div");
			divVar.appendChild(divChild);

			var listPoint = document.createElement("input");
			listPoint.type = "checkbox";
			listPoint.style.float = "left";
			listPoint.style.backgroundColor = "blue";
			var listName = document.createElement("span");
			listName.innerHTML = "Вариант ответа №" + i;
			listName.style.float = "right";

			var divClear = document.createElement("div");
			divClear.style.clear = "both";

			divChild.appendChild(listPoint);
			divChild.appendChild(listName);

			divChild.appendChild(divClear);

			}
			}
		},

		createButt: function() {
			var button = document.createElement("input");
			button.type = "button";
			button.value = "Проверить мои результаты";
			button.style.width = "400px";
			button.style.height = "50px";
			button.style.border = "2px solid black";
			button.style.marginLeft = "500px";
			button.innerHTML = "Проверить мои результаты";
			button.style.backgroundColor = "#09f";
			button.style.marginTop = "70px";
			button.style.fontSize = "18px";

			document.body.appendChild(button);
		}

	}

	




