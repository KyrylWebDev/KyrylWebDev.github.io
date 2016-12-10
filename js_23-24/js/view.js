define (
    'view',
    [ 'jquery', 'model'],
    function() {
        function View(model) {
            let self = this;

            self.init = function () {
                var main = tmpl($('#wrapper-template').html());

                var $('body').append(main);
                self.elements = {
                    input: $('.todo__controlls__input'),
                    addButt: $('.todo__controlls__butt'),
                    listCont: $('.item-list')
                };
                self.renderList(model.data);
            };

            self.renderList = function (data) {
                let list = tmpl($('#list-template').html(), {data: data});
                self.elements.listContainer.html(list);
            };
            init();
        };
        return View;
    };
);
