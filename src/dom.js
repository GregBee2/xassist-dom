'use strict'
	export default function(e){
		return new XaDOMelement(e);
	};
	function XaDOMelement(e){
		this.e=e;
	}
	

	XaDOMelement.prototype={
		addClass:function(c){
			this.e.className = this.e.className+" "+c;
			return this;
		},
		removeClass:function(c){
			this.e.className = this.e.className.replace( new RegExp('(?:^|\\s)'+c+'(?!\\S)','g') ,'');
			return this;
		},
		hasClass:function(c){
			return (new RegExp('(?:^|\\s)'+c+'(?!\\S)').test(this.e.className));
		},
		replaceClass:function(c,d){
			this.e.className =this.e.className.replace( new RegExp('(?:^|\\s)'+c+'(?!\\S)') ,' '+d);
			return this;
		},
		toggleClass:function(c,t){
			t=((typeof t==="undefined")?!this.hasClass(c):!!t);
			if(t){
				return this.addClass(c);
			}
			else{
				return this.removeClass(c);
			}
		},
		attr:function(a,t){
			this.e.setAttribute(a,t);
			return this;
		},
		parents:function(){
			var p = [],
				el=this.e;
			while (el) {
				p.unshift(new DOMelement(el));
				el = el.parentNode;
			}
			return p;
		},
		isVisible:function(){
			//for documetn clientrect does not exist=> so return true
			return !!( this.e.offsetWidth || this.e.offsetHeight || (typeof this.e.getClientRects==="undefined"?true:this.e.getClientRects().length));	
		},
		getDimensions : function() {
			//does not include margin (but padding is included)
			var props = { position: 'absolute', visibility: 'hidden', display: 'block' },
				dim = {},old={},oldProps=[],//first element is document so we doe not change
				i,len,
				hiddenParents;
			if(this.isVisible()){
				//performance=>check if visible
				return this.e.getBoundingClientRect();
			}
			hiddenParents=this.parents();
			for(i=1,len=hiddenParents.length;i<len;i++){
			//hiddenParents.forEach(function(el) {
				
				
				//if(!hiddenParents[i].isVisible()){ 
				if(hiddenParents[i].e.style.display==="none"){ 
					old = {elm:hiddenParents[i]};
					//if this parent is visible, we will not change
					Object.keys(props).forEach(function(name){
						old[ name ] = hiddenParents[i].e.style[ name ];
						hiddenParents[i].e.style[ name ] = props[ name ];
						
					});
				//}
				
					oldProps.push(old);
					//if(this.isVisible()){break;} //performance check but doens not do much=> limiting factor is browser reflow
				}
				
			}
		 
			dim= this.e.getBoundingClientRect();
			len=oldProps.length;
			for(i=0;i<len;i++){
				Object.keys(props).forEach(function(name){
					oldProps[i].elm.e.style[ name ]=oldProps[i][name];
				});
			}
			
		 
			return dim;
		}
	};



