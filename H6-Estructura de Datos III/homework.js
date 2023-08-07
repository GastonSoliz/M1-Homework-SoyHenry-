'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value;
   this.left=null;
   this.right=null;
}

BinarySearchTree.prototype.size = function(){

   // if(this.value===null) return 0;
   
   // if(this.left==null && this.right==null) return 1;
   // else{
   //    if(this.left!=null) return(1+this.left.size());
      
   //    if(this.right!=null) return(1+this.right.size());
   // }

   if(this.value === null) return 0;
   let cant = 1;
   if(this.left) cant += this.left.size();
   if(this.right) cant += this.right.size();
   return cant
}

BinarySearchTree.prototype.insert = function(value){
   let subTree = new BinarySearchTree(value);
   if(value<this.value){
      if(this.left===null){
         this.left=subTree;
      }else{
         this.left.insert(value);
      }
   }else{
      if(this.right==null){
         this.right=subTree;
      }else{
         this.right.insert(value);
      }
   }

}

BinarySearchTree.prototype.contains = function(value){
   
   if(this.value===value) return(true);

   if(value<this.value){
      if(this.left!==null) {return this.left.contains(value);}
      else return false;
   }
   if(value>this.value) {
      if(this.right!==null) {return this.right.contains(value);}
      else return false;
   }
   
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,orden){
   switch(orden){
      case ('pre-order'):
         cb(this.value);
         if(this.left!==null) this.left.depthFirstForEach(cb,orden);
         if(this.right!==null) this.right.depthFirstForEach(cb,orden);
      break;
      case ('post-order'):
         if(this.left!==null) this.left.depthFirstForEach(cb,orden);
         if(this.right!==null) this.right.depthFirstForEach(cb,orden);
         cb(this.value);
      break;

      //case(undefined):
      //case('in-order'):
      default:
            if(this.left!==null) this.left.depthFirstForEach(cb,orden);
            cb(this.value);
            if(this.right!==null) this.right.depthFirstForEach(cb,orden);
      break;
   }

}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr = []){

   if(this.left!==null) arr.push(this.left);
   
   if(this.right!==null) arr.push(this.right);

   cb(this.value);

   if(arr.length>0) arr.shift().breadthFirstForEach(cb,arr);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
