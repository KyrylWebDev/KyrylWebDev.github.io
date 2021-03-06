        function Controller(model, view) {
            var self = this;

            view.elements.addButt.on('click', addItem);
            view.elements.listCont.on('click', '.todo__item--delete', removeItem);
            view.elements.listCont.on('click', '.todo__item--edit', editItem);
            view.elements.listCont.on('click', '.todo__item--done', doneItem);
            view.elements.sortButton.on('click', '#sortButt', sortItems);

            addEventListener('keydown', function (e) {
               if (e.keyCode == 13 && ($('.todo__controlls__input').val() !== " ") && ($('.todo__controlls__input').val() !== "  ")) {
                   e.preventDefault();
                   addItem();
               }
            });

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val(' ');
            }

            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                var input = $(this).parent().find('input');
                input.removeAttr('disabled').focus();
                input.on('focusout', function() {
                    var newValue = $(this).val();
                    correctItem(item, newValue, $(this));
                    input.attr('disabled', 'disabled');
                });
            }

            function correctItem(value, newValue, item) {
                var index = $(this).parent().index();
                item.attr('disabled', 'disabled');
                model.editItem(value, newValue);
                view.renderList(model.data);
            };

            function doneItem() {
                var item = $(this).attr('data-value');
                model.doneItem(item);
                view.renderList(model.data);
            };

            function sortItems(data) {
                model.sortItems(data);
                model.data.sort();
                view.renderList(model.data);
            }
        }
