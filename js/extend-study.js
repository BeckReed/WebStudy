/**
 * Created by Beck on 2016/6/22.
 */

//js继承

//1.借用原型链进行继承
function SuperTypePrototype(){
    this.property=true;
}

SuperTypePrototype.prototype.getSuperValue=function(){
    return this.property;
};

function SubTypePrototype(){
    this.subproperty=false;
}

//继承了SuperType
SubTypePrototype.prototype=new SuperTypePrototype();

SubTypePrototype.prototype.getSubValue=function(){
    return this.subproperty;
}

var instanceProtoType=new SubTypePrototype();