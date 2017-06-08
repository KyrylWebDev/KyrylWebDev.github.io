        function Model(data) {
            var self = this;
            self.data = data;

            self.addItem = function (item) {
                if (item.length === 0) return;
                self.data.push(item);
                return self.data;
            };

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);
                if (index === -1) return;
                self.data.splice(index, 1);
                return self.data;
            };

            self.doneItem = function(item) {
                var index = self.data.indexOf(item);
                if (index === -1) return;
                self.data.splice(index, 1, " ---  THIS IS DONE --- ");
                return self.data;
            }

            self.editItem = function(item, newItem) {
                var index = self.data.indexOf(item);
                if (index === -1) return;
                self.data[index] = newItem;
                return self.data;
            };

            self.sortItems = function(data) {
                self.sort();
                return self.data;
            };
        };
