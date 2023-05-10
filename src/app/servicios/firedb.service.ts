import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {

  constructor(private aFirestore:AngularFirestore) { }

  usercol!:any;
  logcol!:any;

  /*traer(){
    const col = this.aFirestore.collection('usuarios');
    col.valueChanges().subscribe((next:any) => {
      console.log(next);
      this.usercol = next;
    })
  }*/


  // updat(update: any){
  //   const documento = this.aFirestore.doc('coleccion/'+update.id);
  //   documento.update(update);
  //   //documento.update({})
  // }

  // delete(id:string){
  //   const documento  = this.aFirestore.doc('coleccion/'+id);
  //   documento.delete();
  // }

  guardarUsuario(usuario:any){
    const col = this.aFirestore.collection('usuarios');
    const documento = this.aFirestore.doc('usuarios/'+this.aFirestore.createId());
    documento.set({
      id:documento.ref.id,
      nombre: usuario.nombre,
      email: usuario.email
    });
  }

  async traerUsuarios(){
    this.usercol = this.aFirestore.collection('usuarios');
    this.usercol.valueChanges().subscribe((next:any) => {
      //console.log("traer",next);
      this.usercol = next; 
      return next;
    })
  }

  async existeUsuario(mail:string){
    
  }

  async getNombre(mail:string){
    let nom="";
    for(let i=0; i < this.usercol.length;i++){
      if(this.usercol[i].email == mail){
        nom = this.usercol[i].nombre;
        this.guardarLog(nom)
        break;
      }
    }
    return nom;
  }

  guardarLog(nom:string){
    const col = this.aFirestore.collection('userLog');
    const documento = this.aFirestore.doc('userLog/'+this.aFirestore.createId());
    const now = new Date().toString();
    const nowstamp = new Date();
    console.log(now);
    documento.set({
      id:documento.ref.id,
      nombre: nom,
      hora: now,
      stamp: nowstamp
    });
  }

  async traerLog(){
    this.usercol = this.aFirestore.collection('userLog');
    this.usercol.valueChanges().subscribe((next:any) => {
      //console.log("traer",next);
      this.logcol = next; 
      return next;
    })
  }

}
