
if (!Alloy.Collections.MyModel) {
	Alloy.Collections.MyModel = Alloy.createCollection('MyModel');
}

Alloy.Collections.MyModel.fetch();

alert(Alloy.Collections.MyModel.length);
