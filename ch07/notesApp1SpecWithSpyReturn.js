describe('ItemCtrl with SpyReturn', function() {
    beforeEach(module('notesApp1'));

    var ctrl, itemService;

    beforeEach(inject(function($controller, ItemService) {
        spyOn(ItemService, 'list')
            .and.returnValue([{ id: 1, label: 'Mock' }]);
        itemService = ItemService;
        ctrl = $controller('ItemCtrl');
    }));
    it('should load mocked out items', function() {
        expect(itemService.list).toHaveBeenCalled();
        expect(itemService.list.calls.count()).toEquals(1);
        expect(ctrl.items).toEquals([{ id: 1, label: 'Mock' }]);
    });
});