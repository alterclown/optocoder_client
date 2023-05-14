import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomeLayoutComponent implements OnDestroy,OnInit {
	public year:number=new Date().getFullYear();
	public user:any={FullName:'',Email:'',UserTypeId:null, PriflePic:null, CompanyName:null};
	menuTree:any[]=[];
	trips: any[] = [];
	requisitions: any[] = [];
	receiveMessage:any;

    subscriptions: Subscription[] = [];
	newSubscription: Subscription[] = [];

	requisitionItem:any[]=[];
	tripItem:any[]=[];

	message:any
	lengthTrip:any;
	lengthRequisition:any;
	trip:any =[];
	constructor(
		public router:Router,
	){


		//Initializeing menu & sub-menu
		this.loadMenu();

	}
	ngOnInit(): void {
		
	}
	ngOnDestroy(): void {
		// this.subscription.unsubscribe();
	}
	// toggole menu
	isMenuOpen = false;
	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}
	onToggleSideMenu(){
			this.menuTree.forEach(menu=>{
				const el = document.getElementById('submenu'+menu.id)
				if(el){
					el.classList.add('d-none');
					menu.isOpen = false;

					if (menu.isOpen == false){
						// this.departmentService.showMap();

					} else {
						// this.departmentService.hideMap();

					}
				}
			})

	}
	loadMenu(){
		this.menuTree =  [
			{
				id:1,
				text:'Home',
				icon:'fa fa-home',
				isShow:true,
				routerLink:'/dashboard',
				isOpen:false,
				subMenu:[]
			},
			{
				id:2,
				text:'Vehicle Management',
				icon:'fa fa-truck',
				isShow:this.user.UserRoleID==1? true:false,
				routerLink:'#',
				isOpen:false,
				subMenu:[
					{
						id:1,
						text:'Vehicle',
						isShow:true,
						routerLink:'/vehicle',
						subMenu:[]
					},{
						id:4,
						text:'Dashboard',
						isShow:true,
						routerLink:'/dashboard',
						subMenu:[]
					}
				]
			},
			{
				id:3,
				text:'Settings',
				icon:'fa fa-cog',
				isShow:this.user.UserRoleID==1? true:false,
				routerLink:'#',
				isOpen:false,
				subMenu:[
					{
						id:1,
						text:'Organization',
						isShow:true,
						routerLink:'/organization',
						subMenu:[]
					},
					{
						id:2,
						text:'Unit',
						isShow:true,
						routerLink:'/unit',
						subMenu:[]
					},
					{
						id:3,
						text:'Type',
						isShow:true,
						routerLink:'/vehicle-type',
						subMenu:[]
					}
				]
			},
			{
				id:4,
				text:'User Management',
				icon:'fa fa-users',
				isShow:this.user.UserRoleID==1? true:false,
				routerLink:'#',
				isOpen:false,
				subMenu:[
					{
						id:1,
						text:'User',
						isShow:true,
						routerLink:'/user',
						subMenu:[]
					}
				]
			},
			{
				id:5,
				text:'Requisition',
				icon:'fa fa-envelope',
				isShow:true,
				routerLink:'#',
				isOpen:false,
				subMenu:[
					{
						id:1,
						text:'Requisition',
						isShow:this.user.UserRoleID==1? true:false,
						routerLink:'/requisition',
						subMenu:[]
					},
					{
						id:2,
						text:'Requisition',
						isShow:this.user.UserRoleID==2? true:false,
						routerLink:'/requisition-user',
						subMenu:[]
					}
				]
			},

			{
				id:6,
				text:'Trip',
				icon:'fa-solid fa-car',
				isShow:true,
				routerLink:'#',
				isOpen:false,
				subMenu:[
					{
						id:1,
						text:'Trip',
						isShow:this.user.UserRoleID==1? true:false,
						routerLink:'/trip-admin',
						subMenu:[]
					},
					{
						id:2,
						text:'Trip',
						isShow:this.user.UserRoleID==2? true:false,
						routerLink:'/trip-user',
						subMenu:[]
					},
					{
						id:2,
						text:'Report',
						isShow:this.user.UserRoleID==1? true:false,
						routerLink:'/trip-report',
						subMenu:[]
					}
				]
			}
		]
	}

	previousOpenedMenuId = 1;
	toggleSubmenu(id:number){
		const el = document.getElementById('submenu'+id);
		if(el==null){return;}
		if( el.classList.contains('d-none')){
			el.classList.remove('d-none');
			this.menuTree.find(menu=>menu.id==id).isOpen = true;

			//Close previous opened menu
			if(this.previousOpenedMenuId!=id){
				// document.getElementById('submenu'+this.previousOpenedMenuId)?document.getElementById('submenu'+this.previousOpenedMenuId).classList.add('d-none'):null;
				this.menuTree.find(menu=>menu.id==this.previousOpenedMenuId).isOpen = false;
				this.previousOpenedMenuId = id;
			}
		}
		else{
			el.classList.add('d-none');
			this.menuTree.find(menu=>menu.id==id).isOpen = false;
		}
	}

 }


