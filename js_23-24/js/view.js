        function View(model) {
            var self = this;

            function init() {
                self.elements = {
                    input: $('.todo__controlls__input'),
                    addButt: $('.todo__controlls__butt'),
                    listCont: $('.todo__item-list')
                };
                self.renderList(model.data);
            };

            self.renderList = function (data) {
                var list = tmpl($('#list-template').html(), {data: data});
                self.elements.listCont.html(list);
            };
            init();
        };
