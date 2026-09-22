const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GLTFLoader-K4oM52sQ.js","./index-DUNtHIPh.js","./index-BxuBwwvp.css"])))=>i.map(i=>d[i]);
import{i as Pl,s as Ih,R as mn,P as gn,K as Ni,Q as Ll,C as Il,_ as qa,a as Dh,b as qe,v as Uh,w as Ur,f as Ya,p as Ka,c as Nh,m as Za,d as Ja,e as $a,r as ja,g as Qa,h as Oh,j as ei,k as Fh,l as Bh,n as zh,o as kh}from"./index-DUNtHIPh.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="169",Vh=0,tc=1,Hh=2,Dl=1,Gh=2,An=3,Kn=0,Ve=1,wn=2,qn=0,Bi=1,wo=2,ec=3,nc=4,Wh=5,hi=100,Xh=101,qh=102,Yh=103,Kh=104,Zh=200,Jh=201,$h=202,jh=203,Ro=204,Co=205,Qh=206,tu=207,eu=208,nu=209,iu=210,ru=211,su=212,ou=213,au=214,Po=0,Lo=1,Io=2,Vi=3,Do=4,Uo=5,No=6,Oo=7,Ul=0,cu=1,lu=2,Yn=0,hu=1,uu=2,fu=3,du=4,pu=5,mu=6,Nl=7,ic="attached",gu="detached",Ol=300,Hi=301,Gi=302,Fo=303,Bo=304,Rs=306,zo=1e3,fi=1001,ko=1002,We=1003,_u=1004,Nr=1005,an=1006,zs=1007,Gn=1008,Cn=1009,Fl=1010,Bl=1011,xr=1012,Ta=1013,di=1014,un=1015,Tr=1016,Aa=1017,wa=1018,Wi=1020,zl=35902,kl=1021,Vl=1022,je=1023,Hl=1024,Gl=1025,zi=1026,Xi=1027,Ra=1028,Ca=1029,Wl=1030,Pa=1031,La=1033,fs=33776,ds=33777,ps=33778,ms=33779,Vo=35840,Ho=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Ko=37808,Zo=37809,Jo=37810,$o=37811,jo=37812,Qo=37813,ta=37814,ea=37815,na=37816,ia=37817,ra=37818,sa=37819,oa=37820,aa=37821,gs=36492,ca=36494,la=36495,Xl=36283,ha=36284,ua=36285,fa=36286,xs=2300,da=2301,ks=2302,rc=2400,sc=2401,oc=2402,vu=2500,xu=0,yu=1,ac=2,Mu=3200,Su=3201,ql=0,Eu=1,Vn="",Je="srgb",$n="srgb-linear",Ia="display-p3",Cs="display-p3-linear",ys="linear",_e="srgb",Ms="rec709",Ss="p3",xi=7680,cc=519,bu=512,Tu=513,Au=514,Yl=515,wu=516,Ru=517,Cu=518,Pu=519,pa=35044,Lu=35048,lc="300 es",Rn=2e3,Es=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const pr=Math.PI/180,qi=180/Math.PI;function Qe(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Da(i,t){return(i%t+t)%t}function Iu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Du(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function Uu(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function Nu(i,t=1){return t-Math.abs(Da(i,t*2)-t)}function Ou(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zu(i,t){return i+Math.random()*(t-i)}function ku(i){return i*(.5-Math.random())}function Vu(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hu(i){return i*pr}function Gu(i){return i*qi}function Wu(i){return(i&i-1)===0&&i!==0}function Xu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yu(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ma={DEG2RAD:pr,RAD2DEG:qi,generateUUID:Qe,clamp:Re,euclideanModulo:Da,mapLinear:Iu,inverseLerp:Du,lerp:mr,damp:Uu,pingpong:Nu,smoothstep:Ou,smootherstep:Fu,randInt:Bu,randFloat:zu,randFloatSpread:ku,seededRandom:Vu,degToRad:Hu,radToDeg:Gu,isPowerOfTwo:Wu,ceilPowerOfTwo:Xu,floorPowerOfTwo:qu,setQuaternionFromProperEuler:Yu,normalize:de,denormalize:cn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,r,s,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],y=r[4],b=r[7],L=r[2],C=r[5],R=r[8];return s[0]=o*_+a*S+c*L,s[3]=o*m+a*y+c*C,s[6]=o*p+a*b+c*R,s[1]=l*_+h*S+u*L,s[4]=l*m+h*y+u*C,s[7]=l*p+h*b+u*R,s[2]=f*_+d*S+g*L,s[5]=f*m+d*y+g*C,s[8]=f*p+d*b+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=e*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Jt;function Kl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){const i=yr("canvas");return i.style.display="block",i}const uc={};function _s(i){i in uc||(uc[i]=!0,console.warn(i))}function Zu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ju(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $u(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fc=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dc=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[$n]:{transfer:ys,primaries:Ms,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Je]:{transfer:_e,primaries:Ms,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Cs]:{transfer:ys,primaries:Ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(dc),fromReference:i=>i.applyMatrix3(fc)},[Ia]:{transfer:_e,primaries:Ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(dc),fromReference:i=>i.applyMatrix3(fc).convertLinearToSRGB()}},ju=new Set([$n,Cs]),fe={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ju.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ir[t].toReference,r=ir[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===Vn?ys:ir[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ir[t].luminanceCoefficients)}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class Qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=yr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tf=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Qe(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gs(r[o].image)):s.push(Gs(r[o]))}else s=Gs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ef=0;class De extends Zi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=fi,r=fi,s=an,o=Gn,a=je,c=Cn,l=De.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Qe(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Ol;De.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(d+1)/2,L=(p+1)/2,C=(h+f)/4,R=(u+_)/4,D=(g+m)/4;return y>b&&y>L?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=C/n,s=R/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=D/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=R/s,r=D/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new De(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends De{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends De{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),C=Math.atan2(L,p*S);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const b=a*S;if(c=c*m+f*b,l=l*m+d*b,h=h*m+g*b,u=u*m+_*b,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new P,pc=new ln;class jn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(s,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Fr.subVectors(this.max,rr),Mi.subVectors(t.a,rr),Si.subVectors(t.b,rr),Ei.subVectors(t.c,rr),Nn.subVectors(Si,Mi),On.subVectors(Ei,Si),ni.subVectors(Mi,Ei);let e=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-ni.z,ni.y,Nn.z,0,-Nn.x,On.z,0,-On.x,ni.z,0,-ni.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-ni.y,ni.x,0];return!Xs(e,Mi,Si,Ei,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Mi,Si,Ei,Fr))?!1:(Br.crossVectors(Nn,On),e=[Br.x,Br.y,Br.z],Xs(e,Mi,Si,Ei,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Or=new jn,Mi=new P,Si=new P,Ei=new P,Nn=new P,On=new P,ni=new P,rr=new P,Fr=new P,Br=new P,ii=new P;function Xs(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ii.fromArray(i,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const sf=new jn,sr=new P,qs=new P;class Pn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(qs)),this.expandByPoint(sr.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new P,Ys=new P,zr=new P,Fn=new P,Ks=new P,kr=new P,Zs=new P;class Ar{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ys.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Ys);const s=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=Fn.dot(this.direction),c=-Fn.dot(zr),l=Fn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ys).addScaledVector(zr,f),d}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,s){Ks.subVectors(e,t),kr.subVectors(n,t),Zs.crossVectors(Ks,kr);let o=this.direction.dot(Zs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const c=a*this.direction.dot(kr.crossVectors(Fn,kr));if(c<0)return null;const l=a*this.direction.dot(Ks.cross(Fn));if(l<0||c+l>o)return null;const h=-a*Fn.dot(Zs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,r,s,o,a,c,l,h,u,f,d,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,r,s,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/bi.setFromMatrixColumn(t,0).length(),s=1/bi.setFromMatrixColumn(t,1).length(),o=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,af)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Bn.crossVectors(n,Ye),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Bn.crossVectors(n,Ye)),Bn.normalize(),Vr.crossVectors(Ye,Bn),r[0]=Bn.x,r[4]=Vr.x,r[8]=Ye.x,r[1]=Bn.y,r[5]=Vr.y,r[9]=Ye.y,r[2]=Bn.z,r[6]=Vr.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],b=n[11],L=n[15],C=r[0],R=r[4],D=r[8],nt=r[12],v=r[1],E=r[5],G=r[9],V=r[13],z=r[2],Y=r[6],O=r[10],at=r[14],W=r[3],pt=r[7],bt=r[11],yt=r[15];return s[0]=o*C+a*v+c*z+l*W,s[4]=o*R+a*E+c*Y+l*pt,s[8]=o*D+a*G+c*O+l*bt,s[12]=o*nt+a*V+c*at+l*yt,s[1]=h*C+u*v+f*z+d*W,s[5]=h*R+u*E+f*Y+d*pt,s[9]=h*D+u*G+f*O+d*bt,s[13]=h*nt+u*V+f*at+d*yt,s[2]=g*C+_*v+m*z+p*W,s[6]=g*R+_*E+m*Y+p*pt,s[10]=g*D+_*G+m*O+p*bt,s[14]=g*nt+_*V+m*at+p*yt,s[3]=S*C+y*v+b*z+L*W,s[7]=S*R+y*E+b*Y+L*pt,s[11]=S*D+y*G+b*O+L*bt,s[15]=S*nt+y*V+b*at+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*d-n*c*d)+_*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+m*(+e*l*u-e*a*d-s*o*u+n*o*d+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*f+r*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,b=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,C=e*S+n*y+r*b+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=S*R,t[1]=(_*f*s-u*m*s-_*r*d+n*m*d+u*r*p-n*f*p)*R,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*R,t[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*d-n*c*d)*R,t[4]=y*R,t[5]=(h*m*s-g*f*s+g*r*d-e*m*d-h*r*p+e*f*p)*R,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*R,t[7]=(o*f*s-h*c*s+h*r*l-e*f*l-o*r*d+e*c*d)*R,t[8]=b*R,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*d-e*a*d)*R,t[12]=L*R,t[13]=(h*_*r-g*u*r+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,S=c*l,y=c*h,b=c*u,L=n.x,C=n.y,R=n.z;return r[0]=(1-(_+p))*L,r[1]=(d+b)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(d-b)*C,r[5]=(1-(f+p))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(g+y)*R,r[9]=(m-S)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const l=1/s,h=1/o,u=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Rn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let d,g;if(a===Rn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Es)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Rn){const c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),f=(e+t)*l,d=(n+r)*h;let g,_;if(a===Rn)g=(o+s)*u,_=-2*u;else if(a===Es)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new P,sn=new $t,of=new P(0,0,0),af=new P(1,1,1),Bn=new P,Vr=new P,Ye=new P,mc=new $t,gc=new ln;class _n{constructor(t=0,e=0,n=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cf=0;const _c=new P,Ti=new ln,Sn=new $t,Hr=new P,or=new P,lf=new P,hf=new ln,vc=new P(1,0,0),xc=new P(0,1,0),yc=new P(0,0,1),Mc={type:"added"},uf={type:"removed"},Ai={type:"childadded",child:null},Js={type:"childremoved",child:null};class Ee extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Qe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new _n,n=new ln,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Jt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(yc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(or,Hr,this.up):Sn.lookAt(Hr,or,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uf),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new P,En=new P,$s=new P,bn=new P,wi=new P,Ri=new P,Sc=new P,js=new P,Qs=new P,to=new P,eo=new he,no=new he,io=new he;class hn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),on.subVectors(t,e),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){on.subVectors(r,e),En.subVectors(n,e),$s.subVectors(t,e);const o=on.dot(on),a=on.dot(En),c=on.dot($s),l=En.dot(En),h=En.dot($s),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(eo,s.x),o.addScaledVector(no,s.y),o.addScaledVector(io,s.z),o}static isFrontFacing(t,e,n,r){return on.subVectors(n,e),En.subVectors(t,e),on.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;wi.subVectors(r,n),Ri.subVectors(s,n),js.subVectors(t,n);const c=wi.dot(js),l=Ri.dot(js);if(c<=0&&l<=0)return e.copy(n);Qs.subVectors(t,r);const h=wi.dot(Qs),u=Ri.dot(Qs);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(wi,o);to.subVectors(t,s);const d=wi.dot(to),g=Ri.dot(to);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ri,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Sc.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(Sc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=Da(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ro(o,s,t+1/3),this.g=ro(o,s,t),this.b=ro(o,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return fe.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Re(Oe.r*255,0,255))*65536+Math.round(Re(Oe.g*255,0,255))*256+Math.round(Re(Oe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,r=Oe.g,s=Oe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Je){fe.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,r=Oe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Gr);const n=mr(zn.h,Gr.h,e),r=mr(zn.s,Gr.s,e),s=mr(zn.l,Gr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new qt;qt.NAMES=$l;let ff=0;class _i extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Qe(),this.name="",this.type="Material",this.blending=Bi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zn extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,Wr=new ht;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pa&&(t.usage=this.usage),t}}class jl extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ql extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let df=0;const $e=new $t,so=new Ee,Ci=new P,Ke=new jn,ar=new jn,Le=new P;class Ue extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Qe(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?Ql:jl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ke.min,ar.min),Ke.expandByPoint(Le),Le.addVectors(Ke.max,ar.max),Ke.expandByPoint(Le)):(Ke.expandByPoint(ar.min),Ke.expandByPoint(ar.max))}Ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(t,l),Le.add(Ci)),r=Math.max(r,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;const l=new P,h=new P,u=new P,f=new ht,d=new ht,g=new ht,_=new P,m=new P;function p(D,nt,v){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,nt),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,nt),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[D].add(_),a[nt].add(_),a[v].add(_),c[D].add(m),c[nt].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,nt=S.length;D<nt;++D){const v=S[D],E=v.start,G=v.count;for(let V=E,z=E+G;V<z;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new P,b=new P,L=new P,C=new P;function R(D){L.fromBufferAttribute(r,D),C.copy(L);const nt=a[D];y.copy(nt),y.sub(L.multiplyScalar(L.dot(nt))).normalize(),b.crossVectors(C,nt);const E=b.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,E)}for(let D=0,nt=S.length;D<nt;++D){const v=S[D],E=v.start,G=v.count;for(let V=E,z=E+G;V<z;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new $t,ri=new Ar,Xr=new Pn,bc=new P,qr=new P,Yr=new P,Kr=new P,oo=new P,Zr=new P,Tc=new P,Jr=new P;class se extends Ee{constructor(t=new Ue,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(oo.fromBufferAttribute(u,t),o?Zr.addScaledVector(oo,h):Zr.addScaledVector(oo.sub(e),h))}e.add(Zr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),ri.copy(t.ray).recast(t.near),!(Xr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Xr,bc)===null||ri.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Ec.copy(s).invert(),ri.copy(t.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,L=y;b<L;b+=3){const C=a.getX(b),R=a.getX(b+1),D=a.getX(b+2);r=$r(this,p,t,n,l,h,u,C,R,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=$r(this,o,t,n,l,h,u,S,y,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,L=y;b<L;b+=3){const C=b,R=b+1,D=b+2;r=$r(this,p,t,n,l,h,u,C,R,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,b=m+2;r=$r(this,o,t,n,l,h,u,S,y,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function pf(i,t,e,n,r,s,o,a){let c;if(t.side===Ve?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Kn,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:i}}function $r(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,qr),i.getVertexPosition(c,Yr),i.getVertexPosition(l,Kr);const h=pf(i,t,e,n,qr,Yr,Kr,Tc);if(h){const u=new P;hn.getBarycoord(Tc,qr,Yr,Kr,u),r&&(h.uv=hn.getInterpolatedAttribute(r,a,c,l,u,new ht)),s&&(h.uv1=hn.getInterpolatedAttribute(s,a,c,l,u,new ht)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};hn.getNormal(qr,Yr,Kr,f.normal),h.face=f,h.barycoord=u}return h}class Ln extends Ue{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(_,m,p,S,y,b,L,C,R,D,nt){const v=b/R,E=L/D,G=b/2,V=L/2,z=C/2,Y=R+1,O=D+1;let at=0,W=0;const pt=new P;for(let bt=0;bt<O;bt++){const yt=bt*E-V;for(let jt=0;jt<Y;jt++){const Kt=jt*v-G;pt[_]=Kt*S,pt[m]=yt*y,pt[p]=z,l.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[p]=C>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(jt/R),u.push(1-bt/D),at+=1}}for(let bt=0;bt<D;bt++)for(let yt=0;yt<R;yt++){const jt=f+yt+Y*bt,Kt=f+yt+Y*(bt+1),$=f+(yt+1)+Y*(bt+1),rt=f+(yt+1)+Y*bt;c.push(jt,Kt,rt),c.push(Kt,$,rt),W+=6}a.addGroup(d,W,nt),d+=W,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const r in n)t[r]=n[r]}return t}function mf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const gf={clone:Yi,merge:ke};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new P,Ac=new ht,wc=new ht;class Ge extends eh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,wc),e.subVectors(wc,Ac)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class xf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ge(Pi,Li,t,e);r.layers=this.layers,this.add(r);const s=new Ge(Pi,Li,t,e);s.layers=this.layers,this.add(s);const o=new Ge(Pi,Li,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Pi,Li,t,e);a.layers=this.layers,this.add(a);const c=new Ge(Pi,Li,t,e);c.layers=this.layers,this.add(c);const l=new Ge(Pi,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nh extends De{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yf extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new nh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ln(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:qn});s.uniforms.tEquirect.value=e;const o=new se(r,s),a=e.minFilter;return e.minFilter===Gn&&(e.minFilter=an),new xf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const ao=new P,Mf=new P,Sf=new Jt;class ci{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ao.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sf.getNormalMatrix(t),r=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Pn,jr=new P;class Na{constructor(t=new ci,e=new ci,n=new ci,r=new ci,s=new ci,o=new ci){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],y=r[14],b=r[15];if(n[0].setComponents(c-s,f-l,m-d,b-p).normalize(),n[1].setComponents(c+s,f+l,m+d,b+p).normalize(),n[2].setComponents(c+o,f+h,m+g,b+S).normalize(),n[3].setComponents(c-o,f-h,m-g,b-S).normalize(),n[4].setComponents(c-a,f-u,m-_,b-y).normalize(),e===Rn)n[5].setComponents(c+a,f+u,m+_,b+y).normalize();else if(e===Es)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(jr.x=r.normal.x>0?t.max.x:t.min.x,jr.y=r.normal.y>0?t.max.y:t.min.y,jr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Ef(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class mi extends Ue{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let y=0;y<l;y++){const b=y*u-s;g.push(b,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,b=S+l*(p+1),L=S+1+l*(p+1),C=S+1+l*p;d.push(y,b,C),d.push(b,L,C)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:bf,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:wf,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:If,batching_vertex:Df,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Of,iridescence_fragment:Ff,bumpmap_pars_fragment:Bf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:$f,emissivemap_fragment:jf,emissivemap_pars_fragment:Qf,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:rd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:gd,envmap_vertex:od,fog_vertex:ad,fog_pars_vertex:cd,fog_fragment:ld,fog_pars_fragment:hd,gradientmap_pars_fragment:ud,lightmap_pars_fragment:fd,lights_lambert_fragment:dd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:yd,lights_physical_fragment:Md,lights_physical_pars_fragment:Sd,lights_fragment_begin:Ed,lights_fragment_maps:bd,lights_fragment_end:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Cd,map_fragment:Pd,map_pars_fragment:Ld,map_particle_fragment:Id,map_particle_pars_fragment:Dd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Od,morphcolor_vertex:Fd,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:kd,normal_fragment_begin:Vd,normal_fragment_maps:Hd,normal_pars_fragment:Gd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Jd,opaque_fragment:$d,packing:jd,premultiplied_alpha_fragment:Qd,project_vertex:tp,dithering_fragment:ep,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:op,shadowmap_vertex:ap,shadowmask_pars_fragment:cp,skinbase_vertex:lp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:fp,specularmap_fragment:dp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:vp,uv_pars_fragment:xp,uv_pars_vertex:yp,uv_vertex:Mp,worldpos_vertex:Sp,background_vert:Ep,background_frag:bp,backgroundCube_vert:Tp,backgroundCube_frag:Ap,cube_vert:wp,cube_frag:Rp,depth_vert:Cp,depth_frag:Pp,distanceRGBA_vert:Lp,distanceRGBA_frag:Ip,equirect_vert:Dp,equirect_frag:Up,linedashed_vert:Np,linedashed_frag:Op,meshbasic_vert:Fp,meshbasic_frag:Bp,meshlambert_vert:zp,meshlambert_frag:kp,meshmatcap_vert:Vp,meshmatcap_frag:Hp,meshnormal_vert:Gp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:qp,meshphysical_vert:Yp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:$p,points_frag:jp,shadow_vert:Qp,shadow_frag:tm,sprite_vert:em,sprite_frag:nm},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},pn={basic:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ke([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ke([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ke([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ke([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ke([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};pn.physical={uniforms:ke([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Qr={r:0,b:0,g:0},oi=new _n,im=new $t;function rm(i,t,e,n,r,s,o){const a=new qt(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const b=g(S);b===null?p(a,c):b&&b.isColor&&(p(b,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Rs)?(h===void 0&&(h=new se(new Ln(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Yi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),oi.copy(y.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(oi)),h.material.toneMapped=fe.getTransfer(b.colorSpace)!==_e,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new se(new mi(2,2),new Jn({name:"BackgroundMaterial",uniforms:Yi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=fe.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Qr,th(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function sm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,E,G,V,z){let Y=!1;const O=u(V,G,E);s!==O&&(s=O,l(s.object)),Y=d(v,V,G,z),Y&&g(v,V,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(v,E,G,V),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,E,G){const V=G.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let Y=z[E.id];Y===void 0&&(Y={},z[E.id]=Y);let O=Y[V];return O===void 0&&(O=f(c()),Y[V]=O),O}function f(v){const E=[],G=[],V=[];for(let z=0;z<e;z++)E[z]=0,G[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:V,object:v,attributes:{},index:null}}function d(v,E,G,V){const z=s.attributes,Y=E.attributes;let O=0;const at=G.getAttributes();for(const W in at)if(at[W].location>=0){const bt=z[W];let yt=Y[W];if(yt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),bt===void 0||bt.attribute!==yt||yt&&bt.data!==yt.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function g(v,E,G,V){const z={},Y=E.attributes;let O=0;const at=G.getAttributes();for(const W in at)if(at[W].location>=0){let bt=Y[W];bt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor));const yt={};yt.attribute=bt,bt&&bt.data&&(yt.data=bt.data),z[W]=yt,O++}s.attributes=z,s.attributesNum=O,s.index=V}function _(){const v=s.newAttributes;for(let E=0,G=v.length;E<G;E++)v[E]=0}function m(v){p(v,0)}function p(v,E){const G=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;G[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),z[v]!==E&&(i.vertexAttribDivisor(v,E),z[v]=E)}function S(){const v=s.newAttributes,E=s.enabledAttributes;for(let G=0,V=E.length;G<V;G++)E[G]!==v[G]&&(i.disableVertexAttribArray(G),E[G]=0)}function y(v,E,G,V,z,Y,O){O===!0?i.vertexAttribIPointer(v,E,G,z,Y):i.vertexAttribPointer(v,E,G,V,z,Y)}function b(v,E,G,V){_();const z=V.attributes,Y=G.getAttributes(),O=E.defaultAttributeValues;for(const at in Y){const W=Y[at];if(W.location>=0){let pt=z[at];if(pt===void 0&&(at==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),at==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){const bt=pt.normalized,yt=pt.itemSize,jt=t.get(pt);if(jt===void 0)continue;const Kt=jt.buffer,$=jt.type,rt=jt.bytesPerElement,Ct=$===i.INT||$===i.UNSIGNED_INT||pt.gpuType===Ta;if(pt.isInterleavedBufferAttribute){const gt=pt.data,Vt=gt.stride,Ht=pt.offset;if(gt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)p(W.location+Bt,gt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Bt=0;Bt<W.locationSize;Bt++)y(W.location+Bt,yt/W.locationSize,$,bt,Vt*rt,(Ht+yt/W.locationSize*Bt)*rt,Ct)}else{if(pt.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let gt=0;gt<W.locationSize;gt++)y(W.location+gt,yt/W.locationSize,$,bt,yt*rt,yt/W.locationSize*gt*rt,Ct)}}else if(O!==void 0){const bt=O[at];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(W.location,bt);break;case 3:i.vertexAttrib3fv(W.location,bt);break;case 4:i.vertexAttrib4fv(W.location,bt);break;default:i.vertexAttrib1fv(W.location,bt)}}}}S()}function L(){D();for(const v in n){const E=n[v];for(const G in E){const V=E[G];for(const z in V)h(V[z].object),delete V[z];delete E[G]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const G in E){const V=E[G];for(const z in V)h(V[z].object),delete V[z];delete E[G]}delete n[v.id]}function R(v){for(const E in n){const G=n[E];if(G[v.id]===void 0)continue;const V=G[v.id];for(const z in V)h(V[z].object),delete V[z];delete G[v.id]}}function D(){nt(),o=!0,s!==r&&(s=r,l(s.object))}function nt(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:nt,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function om(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function am(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:L,maxSamples:C}}function cm(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ci,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,y=S*4;let b=p.clippingState||null;c.value=b,b=h(g,f,y,d);for(let L=0;L!==y;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lm(i){let t=new WeakMap;function e(o,a){return a===Fo?o.mapping=Hi:a===Bo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fo||a===Bo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rh extends eh{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,Rc=[.125,.215,.35,.446,.526,.582],ui=20,co=new rh,Cc=new qt;let lo=null,ho=0,uo=0,fo=!1;const li=(1+Math.sqrt(5))/2,Ii=1/li,Pc=[new P(-li,Ii,0),new P(li,Ii,0),new P(-Ii,0,li),new P(Ii,0,li),new P(0,li,-Ii),new P(0,li,Ii),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,ho,uo),this._renderer.xr.enabled=fo,t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Tr,format:je,colorSpace:$n,depthBuffer:!1},r=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hm(s)),this._blurMaterial=um(s,t,e)}return r}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,r){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cc),h.toneMapping=Yn,h.autoClear=!1;const d=new Zn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new se(new Ln,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Cc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;ts(r,S*y,p>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Hi||t.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pc[(r-s-1)%Pc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ui-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let S=0;for(let R=0;R<ui;++R){const D=R/_,nt=Math.exp(-D*D/2);p.push(nt),R===0?S+=nt:R<m&&(S+=2*nt)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[r],L=3*b*(r>y-Oi?r-y+Oi:0),C=4*(this._cubeSize-b);ts(e,L,C,3*b,2*b),c.setRenderTarget(e),c.render(u,co)}}function hm(i){const t=[],e=[],n=[];let r=i;const s=i-Oi+1+Rc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Oi?c=Rc[o-i+Oi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,nt=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(nt,_*g*C),y.set(f,m*g*C);const v=[C,C,C,C,C,C];b.set(v,p*g*C)}const L=new Ue;L.setAttribute("position",new Xe(S,_)),L.setAttribute("uv",new Xe(y,m)),L.setAttribute("faceIndex",new Xe(b,p)),t.push(L),r>Oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function um(i,t,e){const n=new Float32Array(ui),r=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ic(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Dc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fo||c===Bo,h=c===Hi||c===Gi;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ga(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new ga(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pm(i,t,e,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,b=S.length;y<b;y+=3){const L=S[y+0],C=S[y+1],R=S[y+2];f.push(L,C,C,R,R,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const L=y+0,C=y+1,R=y+2;f.push(L,C,C,R,R,L)}}else return;const m=new(Kl(f)?Ql:jl)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mm(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<_.length;S++)e.update(p,n,_[S])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _m(i,t,e){const n=new WeakMap,r=new he;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let nt=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",nt)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*L*4*u),R=new Jl(C,b,L,u);R.type=un,R.needsUpdate=!0;const D=y*4;for(let v=0;v<u;v++){const E=m[v],G=p[v],V=S[v],z=b*L*4*v;for(let Y=0;Y<E.count;Y++){const O=Y*D;d===!0&&(r.fromBufferAttribute(E,Y),C[z+O+0]=r.x,C[z+O+1]=r.y,C[z+O+2]=r.z,C[z+O+3]=0),g===!0&&(r.fromBufferAttribute(G,Y),C[z+O+4]=r.x,C[z+O+5]=r.y,C[z+O+6]=r.z,C[z+O+7]=0),_===!0&&(r.fromBufferAttribute(V,Y),C[z+O+8]=r.x,C[z+O+9]=r.y,C[z+O+10]=r.z,C[z+O+11]=V.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new ht(b,L)},n.set(a,f),a.addEventListener("dispose",nt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function vm(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class sh extends De{constructor(t,e,n,r,s,o,a,c,l,h=zi){if(h!==zi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=di),n===void 0&&h===Xi&&(n=Wi),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oh=new De,Uc=new sh(1,1),ah=new Jl,ch=new rf,lh=new nh,Nc=[],Oc=[],Fc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Nc[r];if(s===void 0&&(s=new Float32Array(r),Nc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),Pe(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),Pe(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),Pe(e,n)}}function Am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Um(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=Yl,s=Uc):s=oh,e.setTexture2D(t||s,r)}function Nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ch,r)}function Om(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||lh,r)}function Fm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ah,r)}function Bm(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return Em;case 35675:return bm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Fm}}function zm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Gm(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wm(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xm(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function Ym(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Zm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function $m(i,t){i.uniform2uiv(this.addr,t)}function jm(i,t){i.uniform3uiv(this.addr,t)}function Qm(i,t){i.uniform4uiv(this.addr,t)}function tg(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||oh,s[o])}function eg(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ch,s[o])}function ng(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||lh,s[o])}function ig(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ah,s[o])}function rg(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Vm;case 35666:return Hm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return $m;case 36295:return jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function cg(i,t,e){const n=i.name,r=n.length;for(po.lastIndex=0;;){const s=po.exec(n),o=po.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kc(e,l===void 0?new sg(a,i,t):new og(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ag(a),kc(e,u)),e=u}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);cg(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lg=37297;let hg=0;function ug(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function fg(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===Ss&&e===Ms?n="LinearDisplayP3ToLinearSRGB":t===Ms&&e===Ss&&(n="LinearSRGBToLinearDisplayP3"),i){case $n:case Cs:return[n,"LinearTransferOETF"];case Je:case Ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ug(i.getShaderSource(t),o)}else return r}function dg(i,t){const e=fg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pg(i,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case fu:e="Cineon";break;case du:e="ACESFilmic";break;case mu:e="AgX";break;case Nl:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const es=new P;function mg(){fe.getLuminanceCoefficients(es);const i=es.x.toFixed(4),t=es.y.toFixed(4),e=es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fr(i){return i!==""}function Gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(xg,Mg)}const yg=new Map;function Mg(i,t){let e=Zt[t];if(e===void 0){const n=yg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(Sg,Eg)}function Eg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case lu:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=bg(e),l=Tg(e),h=Ag(e),u=wg(e),f=Rg(e),d=gg(e),g=_g(s),_=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=_a(o),o=Gc(o,e),o=Wc(o,e),a=_a(a),a=Gc(a,e),a=Wc(a,e),o=Xc(o),a=Xc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,b=S+p+a,L=Vc(r,r.VERTEX_SHADER,y),C=Vc(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(E){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(C).trim();let Y=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{const at=Hc(r,L,"vertex"),W=Hc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+at+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||z==="")&&(O=!1);O&&(E.diagnostics={runnable:Y,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(L),r.deleteShader(C),D=new vs(r,_),nt=vg(r,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let nt;this.getAttributes=function(){return nt===void 0&&R(this),nt};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,lg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Pg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}}function Dg(i,t,e,n,r,s,o){const a=new Ua,c=new Lg,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,E,G,V,z){const Y=V.fog,O=z.geometry,at=v.isMeshStandardMaterial?V.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||at),pt=W&&W.mapping===Rs?W.image.height:null,bt=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const yt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=yt!==void 0?yt.length:0;let Kt=0;O.morphAttributes.position!==void 0&&(Kt=1),O.morphAttributes.normal!==void 0&&(Kt=2),O.morphAttributes.color!==void 0&&(Kt=3);let $,rt,Ct,gt;if(bt){const Ae=pn[bt];$=Ae.vertexShader,rt=Ae.fragmentShader}else $=v.vertexShader,rt=v.fragmentShader,c.update(v),Ct=c.getVertexShaderID(v),gt=c.getFragmentShaderID(v);const Vt=i.getRenderTarget(),Ht=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,Yt=!!v.map,tt=!!v.matcap,w=!!W,lt=!!v.aoMap,ut=!!v.lightMap,st=!!v.bumpMap,ft=!!v.normalMap,Dt=!!v.displacementMap,Tt=!!v.emissiveMap,A=!!v.metalnessMap,x=!!v.roughnessMap,F=v.anisotropy>0,Z=v.clearcoat>0,et=v.dispersion>0,J=v.iridescence>0,Lt=v.sheen>0,mt=v.transmission>0,Mt=F&&!!v.anisotropyMap,Qt=Z&&!!v.clearcoatMap,it=Z&&!!v.clearcoatNormalMap,Rt=Z&&!!v.clearcoatRoughnessMap,Ot=J&&!!v.iridescenceMap,kt=J&&!!v.iridescenceThicknessMap,Et=Lt&&!!v.sheenColorMap,ee=Lt&&!!v.sheenRoughnessMap,Gt=!!v.specularMap,ce=!!v.specularColorMap,I=!!v.specularIntensityMap,At=mt&&!!v.transmissionMap,X=mt&&!!v.thicknessMap,Q=!!v.gradientMap,xt=!!v.alphaMap,wt=v.alphaTest>0,ne=!!v.alphaHash,xe=!!v.extensions;let Ie=Yn;v.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const ie={shaderID:bt,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:rt,defines:v.defines,customVertexShaderID:Ct,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&z.instanceColor!==null,instancingMorph:Ht&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Vt===null?i.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:$n,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:tt,envMap:w,envMapMode:w&&W.mapping,envMapCubeUVHeight:pt,aoMap:lt,lightMap:ut,bumpMap:st,normalMap:ft,displacementMap:d&&Dt,emissiveMap:Tt,normalMapObjectSpace:ft&&v.normalMapType===Eu,normalMapTangentSpace:ft&&v.normalMapType===ql,metalnessMap:A,roughnessMap:x,anisotropy:F,anisotropyMap:Mt,clearcoat:Z,clearcoatMap:Qt,clearcoatNormalMap:it,clearcoatRoughnessMap:Rt,dispersion:et,iridescence:J,iridescenceMap:Ot,iridescenceThicknessMap:kt,sheen:Lt,sheenColorMap:Et,sheenRoughnessMap:ee,specularMap:Gt,specularColorMap:ce,specularIntensityMap:I,transmission:mt,transmissionMap:At,thicknessMap:X,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Bi&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:ne,combine:v.combine,mapUv:Yt&&m(v.map.channel),aoMapUv:lt&&m(v.aoMap.channel),lightMapUv:ut&&m(v.lightMap.channel),bumpMapUv:st&&m(v.bumpMap.channel),normalMapUv:ft&&m(v.normalMap.channel),displacementMapUv:Dt&&m(v.displacementMap.channel),emissiveMapUv:Tt&&m(v.emissiveMap.channel),metalnessMapUv:A&&m(v.metalnessMap.channel),roughnessMapUv:x&&m(v.roughnessMap.channel),anisotropyMapUv:Mt&&m(v.anisotropyMap.channel),clearcoatMapUv:Qt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(v.sheenRoughnessMap.channel),specularMapUv:Gt&&m(v.specularMap.channel),specularColorMapUv:ce&&m(v.specularColorMap.channel),specularIntensityMapUv:I&&m(v.specularIntensityMap.channel),transmissionMapUv:At&&m(v.transmissionMap.channel),thicknessMapUv:X&&m(v.thicknessMap.channel),alphaMapUv:xt&&m(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(Yt||xt),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:Kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function S(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)E.push(G),E.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(y(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function L(v){const E=_[v.type];let G;if(E){const V=pn[E];G=gf.clone(V.uniforms)}else G=v.uniforms;return G}function C(v,E){let G;for(let V=0,z=h.length;V<z;V++){const Y=h[V];if(Y.cacheKey===E){G=Y,++G.usedTimes;break}}return G===void 0&&(G=new Cg(i,E,v,s),h.push(G)),G}function R(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function D(v){c.remove(v)}function nt(){c.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:L,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:nt}}function Ug(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Ng),n.length>1&&n.sort(f||Yc),r.length>1&&r.sort(f||Yc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Og(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Kc,i.set(n,[o])):r>=s.length?(o=new Kc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new qt};break;case"SpotLight":e={position:new P,direction:new P,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zg=0;function kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){const t=new Fg,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const r=new P,s=new $t,o=new $t;function a(l){let h=0,u=0,f=0;for(let nt=0;nt<9;nt++)n.probe[nt].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,y=0,b=0,L=0,C=0,R=0;l.sort(kg);for(let nt=0,v=l.length;nt<v;nt++){const E=l[nt],G=E.color,V=E.intensity,z=E.distance,Y=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=G.r*V,u+=G.g*V,f+=G.b*V;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],V);R++}else if(E.isDirectionalLight){const O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const at=E.shadow,W=e.get(E);W.shadowIntensity=at.intensity,W.shadowBias=at.bias,W.shadowNormalBias=at.normalBias,W.shadowRadius=at.radius,W.shadowMapSize=at.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=E.shadow.matrix,S++}n.directional[d]=O,d++}else if(E.isSpotLight){const O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(G).multiplyScalar(V),O.distance=z,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[_]=O;const at=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,at.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[_]=at.matrix,E.castShadow){const W=e.get(E);W.shadowIntensity=at.intensity,W.shadowBias=at.bias,W.shadowNormalBias=at.normalBias,W.shadowRadius=at.radius,W.shadowMapSize=at.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Y,b++}_++}else if(E.isRectAreaLight){const O=t.get(E);O.color.copy(G).multiplyScalar(V),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=O,m++}else if(E.isPointLight){const O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const at=E.shadow,W=e.get(E);W.shadowIntensity=at.intensity,W.shadowBias=at.bias,W.shadowNormalBias=at.normalBias,W.shadowRadius=at.radius,W.shadowMapSize=at.mapSize,W.shadowCameraNear=at.camera.near,W.shadowCameraFar=at.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=O,g++}else if(E.isHemisphereLight){const O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(V),O.groundColor.copy(E.groundColor).multiplyScalar(V),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==L||D.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=L,D.numLightProbes=R,n.version=zg++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Zc(i){const t=new Vg(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Hg(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Zc(i),t.set(r,[a])):s>=o.length?(a=new Zc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gg extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(i,t,e){let n=new Na;const r=new ht,s=new ht,o=new he,a=new Gg({depthPacking:Su}),c=new Wg,l={},h=e.maxTextureSize,u={[Kn]:Ve,[Ve]:Kn,[wn]:wn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const nt=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),G=i.state;G.setBlending(qn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=p!==An&&this.type===An,z=p===An&&this.type!==An;for(let Y=0,O=C.length;Y<O;Y++){const at=C[Y],W=at.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const pt=W.getFrameExtents();if(r.multiply(pt),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/pt.x),r.x=s.x*pt.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/pt.y),r.y=s.y*pt.y,W.mapSize.y=s.y)),W.map===null||V===!0||z===!0){const yt=this.type!==An?{minFilter:We,magFilter:We}:{};W.map!==null&&W.map.dispose(),W.map=new pi(r.x,r.y,yt),W.map.texture.name=at.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const bt=W.getViewportCount();for(let yt=0;yt<bt;yt++){const jt=W.getViewport(yt);o.set(s.x*jt.x,s.y*jt.y,s.x*jt.z,s.y*jt.w),G.viewport(o),W.updateMatrices(at,yt),n=W.getFrustum(),b(R,D,W.camera,at,this.type)}W.isPointLightShadow!==!0&&this.type===An&&S(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(nt,v,E)};function S(C,R){const D=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,D,d,_,null)}function y(C,R,D,nt){let v=null;const E=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)v=E;else if(v=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=v.uuid,V=R.uuid;let z=l[G];z===void 0&&(z={},l[G]=z);let Y=z[V];Y===void 0&&(Y=v.clone(),z[V]=Y,R.addEventListener("dispose",L)),v=Y}if(v.visible=R.visible,v.wireframe=R.wireframe,nt===An?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=i.properties.get(v);G.light=D}return v}function b(C,R,D,nt,v){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const V=t.update(C),z=C.material;if(Array.isArray(z)){const Y=V.groups;for(let O=0,at=Y.length;O<at;O++){const W=Y[O],pt=z[W.materialIndex];if(pt&&pt.visible){const bt=y(C,pt,nt,v);C.onBeforeShadow(i,C,R,D,V,bt,W),i.renderBufferDirect(D,null,V,bt,C,W),C.onAfterShadow(i,C,R,D,V,bt,W)}}}else if(z.visible){const Y=y(C,z,nt,v);C.onBeforeShadow(i,C,R,D,V,Y,null),i.renderBufferDirect(D,null,V,Y,C,null),C.onAfterShadow(i,C,R,D,V,Y,null)}}const G=C.children;for(let V=0,z=G.length;V<z;V++)b(G[V],R,D,nt,v)}function L(C){C.target.removeEventListener("dispose",L);for(const D in l){const nt=l[D],v=C.target.uuid;v in nt&&(nt[v].dispose(),delete nt[v])}}}const Kg={[Po]:Lo,[Io]:No,[Do]:Oo,[Vi]:Uo,[Lo]:Po,[No]:Io,[Oo]:Do,[Uo]:Vi};function Zg(i){function t(){let I=!1;const At=new he;let X=null;const Q=new he(0,0,0,0);return{setMask:function(xt){X!==xt&&!I&&(i.colorMask(xt,xt,xt,xt),X=xt)},setLocked:function(xt){I=xt},setClear:function(xt,wt,ne,xe,Ie){Ie===!0&&(xt*=xe,wt*=xe,ne*=xe),At.set(xt,wt,ne,xe),Q.equals(At)===!1&&(i.clearColor(xt,wt,ne,xe),Q.copy(At))},reset:function(){I=!1,X=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,At=!1,X=null,Q=null,xt=null;return{setReversed:function(wt){At=wt},setTest:function(wt){wt?Ct(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(wt){X!==wt&&!I&&(i.depthMask(wt),X=wt)},setFunc:function(wt){if(At&&(wt=Kg[wt]),Q!==wt){switch(wt){case Po:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=wt}},setLocked:function(wt){I=wt},setClear:function(wt){xt!==wt&&(i.clearDepth(wt),xt=wt)},reset:function(){I=!1,X=null,Q=null,xt=null}}}function n(){let I=!1,At=null,X=null,Q=null,xt=null,wt=null,ne=null,xe=null,Ie=null;return{setTest:function(ie){I||(ie?Ct(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ie){At!==ie&&!I&&(i.stencilMask(ie),At=ie)},setFunc:function(ie,Ae,tn){(X!==ie||Q!==Ae||xt!==tn)&&(i.stencilFunc(ie,Ae,tn),X=ie,Q=Ae,xt=tn)},setOp:function(ie,Ae,tn){(wt!==ie||ne!==Ae||xe!==tn)&&(i.stencilOp(ie,Ae,tn),wt=ie,ne=Ae,xe=tn)},setLocked:function(ie){I=ie},setClear:function(ie){Ie!==ie&&(i.clearStencil(ie),Ie=ie)},reset:function(){I=!1,At=null,X=null,Q=null,xt=null,wt=null,ne=null,xe=null,Ie=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,S=null,y=null,b=null,L=null,C=new qt(0,0,0),R=0,D=!1,nt=null,v=null,E=null,G=null,V=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(at)[1]),Y=O>=1):at.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),Y=O>=2);let W=null,pt={};const bt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),jt=new he().fromArray(bt),Kt=new he().fromArray(yt);function $(I,At,X,Q){const xt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(I,wt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<X;ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(At+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return wt}const rt={};rt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ct(i.DEPTH_TEST),s.setFunc(Vi),ut(!1),st(tc),Ct(i.CULL_FACE),w(qn);function Ct(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function gt(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Vt(I,At){return h[I]!==At?(i.bindFramebuffer(I,At),h[I]=At,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Ht(I,At){let X=f,Q=!1;if(I){X=u.get(At),X===void 0&&(X=[],u.set(At,X));const xt=I.textures;if(X.length!==xt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,ne=xt.length;wt<ne;wt++)X[wt]=i.COLOR_ATTACHMENT0+wt;X.length=xt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function Bt(I){return d!==I?(i.useProgram(I),d=I,!0):!1}const Yt={[hi]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};Yt[Yh]=i.MIN,Yt[Kh]=i.MAX;const tt={[Zh]:i.ZERO,[Jh]:i.ONE,[$h]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[su]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[au]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,At,X,Q,xt,wt,ne,xe,Ie,ie){if(I===qn){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(Ct(i.BLEND),g=!0),I!==Wh){if(I!==_||ie!==D){if((m!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),m=hi,y=hi),ie)switch(I){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,S=null,b=null,L=null,C.set(0,0,0),R=0,_=I,D=ie}return}xt=xt||At,wt=wt||X,ne=ne||Q,(At!==m||xt!==y)&&(i.blendEquationSeparate(Yt[At],Yt[xt]),m=At,y=xt),(X!==p||Q!==S||wt!==b||ne!==L)&&(i.blendFuncSeparate(tt[X],tt[Q],tt[wt],tt[ne]),p=X,S=Q,b=wt,L=ne),(xe.equals(C)===!1||Ie!==R)&&(i.blendColor(xe.r,xe.g,xe.b,Ie),C.copy(xe),R=Ie),_=I,D=!1}function lt(I,At){I.side===wn?gt(i.CULL_FACE):Ct(i.CULL_FACE);let X=I.side===Ve;At&&(X=!X),ut(X),I.blending===Bi&&I.transparent===!1?w(qn):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(I){nt!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),nt=I)}function st(I){I!==Vh?(Ct(i.CULL_FACE),I!==v&&(I===tc?i.cullFace(i.BACK):I===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),v=I}function ft(I){I!==E&&(Y&&i.lineWidth(I),E=I)}function Dt(I,At,X){I?(Ct(i.POLYGON_OFFSET_FILL),(G!==At||V!==X)&&(i.polygonOffset(At,X),G=At,V=X)):gt(i.POLYGON_OFFSET_FILL)}function Tt(I){I?Ct(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+z-1),W!==I&&(i.activeTexture(I),W=I)}function x(I,At,X){X===void 0&&(W===null?X=i.TEXTURE0+z-1:X=W);let Q=pt[X];Q===void 0&&(Q={type:void 0,texture:void 0},pt[X]=Q),(Q.type!==I||Q.texture!==At)&&(W!==X&&(i.activeTexture(X),W=X),i.bindTexture(I,At||rt[I]),Q.type=I,Q.texture=At)}function F(){const I=pt[W];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function Et(I){Kt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Kt.copy(I))}function ee(I,At){let X=c.get(At);X===void 0&&(X=new WeakMap,c.set(At,X));let Q=X.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(At,I.name),X.set(I,Q))}function Gt(I,At){const Q=c.get(At).get(I);a.get(At)!==Q&&(i.uniformBlockBinding(At,Q,I.__bindingPointIndex),a.set(At,Q))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,pt={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,S=null,y=null,b=null,L=null,C=new qt(0,0,0),R=0,D=!1,nt=null,v=null,E=null,G=null,V=null,jt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ct,disable:gt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:Bt,setBlending:w,setMaterial:lt,setFlipSided:ut,setCullFace:st,setLineWidth:ft,setPolygonOffset:Dt,setScissorTest:Tt,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:ee,uniformBlockBinding:Gt,texStorage2D:Qt,texStorage3D:it,texSubImage2D:J,texSubImage3D:Lt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:kt,viewport:Et,reset:ce}}function Jc(i,t,e,n){const r=Jg(n);switch(e){case kl:return i*t;case Hl:return i*t;case Gl:return i*t*2;case Ra:return i*t/r.components*r.byteLength;case Ca:return i*t/r.components*r.byteLength;case Wl:return i*t*2/r.components*r.byteLength;case Pa:return i*t*2/r.components*r.byteLength;case Vl:return i*t*3/r.components*r.byteLength;case je:return i*t*4/r.components*r.byteLength;case La:return i*t*4/r.components*r.byteLength;case fs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Vo:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gs:case ca:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ua:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(i){switch(i){case Cn:case Fl:return{byteLength:1,components:1};case xr:case Bl:case Tr:return{byteLength:2,components:1};case Aa:case wa:return{byteLength:2,components:4};case di:case Ta:case un:return{byteLength:4,components:1};case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $g(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):yr("canvas")}function _(A,x,F){let Z=1;const et=Tt(A);if((et.width>F||et.height>F)&&(Z=F/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*et.width),Lt=Math.floor(Z*et.height);u===void 0&&(u=g(J,Lt));const mt=x?g(J,Lt):u;return mt.width=J,mt.height=Lt,mt.getContext("2d").drawImage(A,0,0,J,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Lt+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==We&&A.minFilter!==an}function p(A){i.generateMipmap(A)}function S(A,x,F,Z,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const Lt=et?ys:fe.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=Lt===_e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(A,x){let F;return A?x===null||x===di||x===Wi?F=i.DEPTH24_STENCIL8:x===un?F=i.DEPTH32F_STENCIL8:x===xr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===Wi?F=i.DEPTH_COMPONENT24:x===un?F=i.DEPTH_COMPONENT32F:x===xr&&(F=i.DEPTH_COMPONENT16),F}function b(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){const x=A.target;x.removeEventListener("dispose",L),R(x),x.isVideoTexture&&h.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),nt(x)}function R(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,Z=f.get(F);if(Z){const et=Z[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(A),Object.keys(Z).length===0&&f.delete(F)}n.remove(A)}function D(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const F=A.source,Z=f.get(F);delete Z[x.__cacheKey],o.memory.textures--}function nt(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let et=0;et<x.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let Z=0,et=F.length;Z<et;Z++){const J=n.get(F[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(F[Z])}n.remove(A)}let v=0;function E(){v=0}function G(){const A=v;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),v+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function z(A,x){const F=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(F,A,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Y(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Kt(F,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function O(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Kt(F,A,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function at(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const W={[zo]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},pt={[We]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},bt={[bu]:i.NEVER,[Pu]:i.ALWAYS,[Tu]:i.LESS,[Yl]:i.LEQUAL,[Au]:i.EQUAL,[Cu]:i.GEQUAL,[wu]:i.GREATER,[Ru]:i.NOTEQUAL};function yt(A,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===zs||x.magFilter===Nr||x.magFilter===Gn||x.minFilter===an||x.minFilter===zs||x.minFilter===Nr||x.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==Nr&&x.minFilter!==Gn||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));const Z=x.source;let et=f.get(Z);et===void 0&&(et={},f.set(Z,et));const J=V(x);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[J].usedTimes++;const Lt=et[A.__cacheKey];Lt!==void 0&&(et[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&D(x)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return F}function Kt(A,x,F){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const et=jt(A,x),J=x.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+F);const Lt=n.get(J);if(J.version!==Lt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);const mt=fe.getPrimaries(fe.workingColorSpace),Mt=x.colorSpace===Vn?null:fe.getPrimaries(x.colorSpace),Qt=x.colorSpace===Vn||mt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let it=_(x.image,!1,r.maxTextureSize);it=Dt(x,it);const Rt=s.convert(x.format,x.colorSpace),Ot=s.convert(x.type);let kt=S(x.internalFormat,Rt,Ot,x.colorSpace,x.isVideoTexture);yt(Z,x);let Et;const ee=x.mipmaps,Gt=x.isVideoTexture!==!0,ce=Lt.__version===void 0||et===!0,I=J.dataReady,At=b(x,it);if(x.isDepthTexture)kt=y(x.format===Xi,x.type),ce&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,kt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,Rt,Ot,null));else if(x.isDataTexture)if(ee.length>0){Gt&&ce&&e.texStorage2D(i.TEXTURE_2D,At,kt,ee[0].width,ee[0].height);for(let X=0,Q=ee.length;X<Q;X++)Et=ee[X],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,Rt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,X,kt,Et.width,Et.height,0,Rt,Ot,Et.data);x.generateMipmaps=!1}else Gt?(ce&&e.texStorage2D(i.TEXTURE_2D,At,kt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Rt,Ot,it.data)):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,Rt,Ot,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,kt,ee[0].width,ee[0].height,it.depth);for(let X=0,Q=ee.length;X<Q;X++)if(Et=ee[X],x.format!==je)if(Rt!==null)if(Gt){if(I)if(x.layerUpdates.size>0){const xt=Jc(Et.width,Et.height,x.format,x.type);for(const wt of x.layerUpdates){const ne=Et.data.subarray(wt*xt/Et.data.BYTES_PER_ELEMENT,(wt+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,wt,Et.width,Et.height,1,Rt,ne,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,it.depth,Rt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,it.depth,Rt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,it.depth,0,Rt,Ot,Et.data)}else{Gt&&ce&&e.texStorage2D(i.TEXTURE_2D,At,kt,ee[0].width,ee[0].height);for(let X=0,Q=ee.length;X<Q;X++)Et=ee[X],x.format!==je?Rt!==null?Gt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,Rt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,X,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,Rt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,X,kt,Et.width,Et.height,0,Rt,Ot,Et.data)}else if(x.isDataArrayTexture)if(Gt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,kt,it.width,it.height,it.depth),I)if(x.layerUpdates.size>0){const X=Jc(it.width,it.height,x.format,x.type);for(const Q of x.layerUpdates){const xt=it.data.subarray(Q*X/it.data.BYTES_PER_ELEMENT,(Q+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,Rt,Ot,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Rt,Ot,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,it.width,it.height,it.depth,0,Rt,Ot,it.data);else if(x.isData3DTexture)Gt?(ce&&e.texStorage3D(i.TEXTURE_3D,At,kt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Rt,Ot,it.data)):e.texImage3D(i.TEXTURE_3D,0,kt,it.width,it.height,it.depth,0,Rt,Ot,it.data);else if(x.isFramebufferTexture){if(ce)if(Gt)e.texStorage2D(i.TEXTURE_2D,At,kt,it.width,it.height);else{let X=it.width,Q=it.height;for(let xt=0;xt<At;xt++)e.texImage2D(i.TEXTURE_2D,xt,kt,X,Q,0,Rt,Ot,null),X>>=1,Q>>=1}}else if(ee.length>0){if(Gt&&ce){const X=Tt(ee[0]);e.texStorage2D(i.TEXTURE_2D,At,kt,X.width,X.height)}for(let X=0,Q=ee.length;X<Q;X++)Et=ee[X],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Rt,Ot,Et):e.texImage2D(i.TEXTURE_2D,X,kt,Rt,Ot,Et);x.generateMipmaps=!1}else if(Gt){if(ce){const X=Tt(it);e.texStorage2D(i.TEXTURE_2D,At,kt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,it)}else e.texImage2D(i.TEXTURE_2D,0,kt,Rt,Ot,it);m(x)&&p(Z),Lt.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,F){if(x.image.length!==6)return;const Z=jt(A,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const J=n.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const Lt=fe.getPrimaries(fe.workingColorSpace),mt=x.colorSpace===Vn?null:fe.getPrimaries(x.colorSpace),Mt=x.colorSpace===Vn||Lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Qt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,Rt=[];for(let Q=0;Q<6;Q++)!Qt&&!it?Rt[Q]=_(x.image[Q],!0,r.maxCubemapSize):Rt[Q]=it?x.image[Q].image:x.image[Q],Rt[Q]=Dt(x,Rt[Q]);const Ot=Rt[0],kt=s.convert(x.format,x.colorSpace),Et=s.convert(x.type),ee=S(x.internalFormat,kt,Et,x.colorSpace),Gt=x.isVideoTexture!==!0,ce=J.__version===void 0||Z===!0,I=et.dataReady;let At=b(x,Ot);yt(i.TEXTURE_CUBE_MAP,x);let X;if(Qt){Gt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ee,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){X=Rt[Q].mipmaps;for(let xt=0;xt<X.length;xt++){const wt=X[xt];x.format!==je?kt!==null?Gt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,wt.width,wt.height,kt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,wt.width,wt.height,kt,Et,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,ee,wt.width,wt.height,0,kt,Et,wt.data)}}}else{if(X=x.mipmaps,Gt&&ce){X.length>0&&At++;const Q=Tt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ee,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Rt[Q].width,Rt[Q].height,kt,Et,Rt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,Rt[Q].width,Rt[Q].height,0,kt,Et,Rt[Q].data);for(let xt=0;xt<X.length;xt++){const ne=X[xt].image[Q].image;Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,ne.width,ne.height,kt,Et,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,ne.width,ne.height,0,kt,Et,ne.data)}}else{Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,Et,Rt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,kt,Et,Rt[Q]);for(let xt=0;xt<X.length;xt++){const wt=X[xt];Gt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,kt,Et,wt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,ee,kt,Et,wt.image[Q])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function rt(A,x,F,Z,et,J){const Lt=s.convert(F.format,F.colorSpace),mt=s.convert(F.type),Mt=S(F.internalFormat,Lt,mt,F.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>J),Rt=Math.max(1,x.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,Mt,it,Rt,x.depth,0,Lt,mt,null):e.texImage2D(et,J,Mt,it,Rt,0,Lt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,n.get(F).__webglTexture,0,ut(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,n.get(F).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=y(x.stencilBuffer,et),Lt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=ut(x);st(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{const Z=x.textures;for(let et=0;et<Z.length;et++){const J=Z[et],Lt=s.convert(J.format,J.colorSpace),mt=s.convert(J.type),Mt=S(J.internalFormat,Lt,mt,J.colorSpace),Qt=ut(x);F&&st(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Mt,x.width,x.height):st(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,et=ut(x);if(x.depthTexture.format===zi)st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Xi)st(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Vt(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");gt(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ct(x.__webglDepthbuffer[Z],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ct(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(A,x,F){const Z=n.get(A);x!==void 0&&rt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Vt(A)}function Bt(A){const x=A.texture,F=n.get(A),Z=n.get(x);A.addEventListener("dispose",C);const et=A.textures,J=A.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)F.__webglFramebuffer[mt][Mt]=i.createFramebuffer()}else F.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let mt=0;mt<x.mipmaps.length;mt++)F.__webglFramebuffer[mt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let mt=0,Mt=et.length;mt<Mt;mt++){const Qt=n.get(et[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const Mt=et[mt];F.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[mt]);const Qt=s.convert(Mt.format,Mt.colorSpace),it=s.convert(Mt.type),Rt=S(Mt.internalFormat,Qt,it,Mt.colorSpace,A.isXRRenderTarget===!0),Ot=ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,F.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(i.TEXTURE_CUBE_MAP,x);for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)rt(F.__webglFramebuffer[mt][Mt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else rt(F.__webglFramebuffer[mt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,Mt=et.length;mt<Mt;mt++){const Qt=et[mt],it=n.get(Qt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),yt(i.TEXTURE_2D,Qt),rt(F.__webglFramebuffer,A,Qt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Z.__webglTexture),yt(mt,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)rt(F.__webglFramebuffer[Mt],A,x,i.COLOR_ATTACHMENT0,mt,Mt);else rt(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,mt,0);m(x)&&p(mt),e.unbindTexture()}A.depthBuffer&&Vt(A)}function Yt(A){const x=A.textures;for(let F=0,Z=x.length;F<Z;F++){const et=x[F];if(m(et)){const J=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(et).__webglTexture;e.bindTexture(J,Lt),p(J),e.unbindTexture()}}}const tt=[],w=[];function lt(A){if(A.samples>0){if(st(A)===!1){const x=A.textures,F=A.width,Z=A.height;let et=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),mt=x.length>1;if(mt)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const Qt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,et,i.NEAREST),c===!0&&(tt.length=0,w.length=0,tt.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(J),w.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const Qt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ut(A){return Math.min(r.maxSamples,A.samples)}function st(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ft(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Dt(A,x){const F=A.colorSpace,Z=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==$n&&F!==Vn&&(fe.getTransfer(F)===_e?(Z!==je||et!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=at,this.rebindTextures=Ht,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=st}function jg(i,t){function e(n,r=Vn){let s;const o=fe.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return i.BYTE;if(n===Bl)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===kl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===je)return i.RGBA;if(n===Hl)return i.LUMINANCE;if(n===Gl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Wl)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===fs||n===ds||n===ps||n===ms)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Ho||n===Go||n===Wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xo||n===qo)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===Zo||n===Jo||n===$o||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===oa||n===aa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gs||n===ca||n===la)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===gs)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ha||n===ua||n===fa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===gs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qg extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dr extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new De,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Zi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new i_,m=e.getContextAttributes();let p=null,S=null;const y=[],b=[],L=new ht;let C=null;const R=new Ge;R.layers.enable(1),R.viewport=new he;const D=new Ge;D.layers.enable(2),D.viewport=new he;const nt=[R,D],v=new Qg;v.layers.enable(1),v.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=y[$];return rt===void 0&&(rt=new mo,y[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=y[$];return rt===void 0&&(rt=new mo,y[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=y[$];return rt===void 0&&(rt=new mo,y[$]=rt),rt.getHandSpace()};function V($){const rt=b.indexOf($.inputSource);if(rt===-1)return;const Ct=y[rt];Ct!==void 0&&(Ct.update($.inputSource,$.frame,l||o),Ct.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){const rt=b[$];rt!==null&&(b[$]=null,y[$].disconnect(rt))}E=null,G=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,r=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new pi(d.framebufferWidth,d.framebufferHeight,{format:je,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Ct=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Xi:zi,Ct=m.stencil?Wi:di);const Vt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(Vt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new pi(f.textureWidth,f.textureHeight,{format:je,type:Cn,depthTexture:new sh(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Kt.setContext(r),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let rt=0;rt<$.removed.length;rt++){const Ct=$.removed[rt],gt=b.indexOf(Ct);gt>=0&&(b[gt]=null,y[gt].disconnect(Ct))}for(let rt=0;rt<$.added.length;rt++){const Ct=$.added[rt];let gt=b.indexOf(Ct);if(gt===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=b.length){b.push(Ct),gt=Ht;break}else if(b[Ht]===null){b[Ht]=Ct,gt=Ht;break}if(gt===-1)break}const Vt=y[gt];Vt&&Vt.connect(Ct)}}const O=new P,at=new P;function W($,rt,Ct){O.setFromMatrixPosition(rt.matrixWorld),at.setFromMatrixPosition(Ct.matrixWorld);const gt=O.distanceTo(at),Vt=rt.projectionMatrix.elements,Ht=Ct.projectionMatrix.elements,Bt=Vt[14]/(Vt[10]-1),Yt=Vt[14]/(Vt[10]+1),tt=(Vt[9]+1)/Vt[5],w=(Vt[9]-1)/Vt[5],lt=(Vt[8]-1)/Vt[0],ut=(Ht[8]+1)/Ht[0],st=Bt*lt,ft=Bt*ut,Dt=gt/(-lt+ut),Tt=Dt*-lt;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Vt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const A=Bt+Dt,x=Yt+Dt,F=st-Tt,Z=ft+(gt-Tt),et=tt*Yt/x*A,J=w*Yt/x*A;$.projectionMatrix.makePerspective(F,Z,et,J,A,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let rt=$.near,Ct=$.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),v.near=D.near=R.near=rt,v.far=D.far=R.far=Ct,(E!==v.near||G!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,G=v.far);const gt=$.parent,Vt=v.cameras;pt(v,gt);for(let Ht=0;Ht<Vt.length;Ht++)pt(Vt[Ht],gt);Vt.length===2?W(v,R,D):v.projectionMatrix.copy(R.projectionMatrix),bt($,v,gt)};function bt($,rt,Ct){Ct===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function jt($,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){const Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let gt=!1;Ct.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let Ht=0;Ht<Ct.length;Ht++){const Bt=Ct[Ht];let Yt=null;if(d!==null)Yt=d.getViewport(Bt);else{const w=u.getViewSubImage(f,Bt);Yt=w.viewport,Ht===0&&(t.setRenderTargetTextures(S,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(S))}let tt=nt[Ht];tt===void 0&&(tt=new Ge,tt.layers.enable(Ht),tt.viewport=new he,nt[Ht]=tt),tt.matrix.fromArray(Bt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Bt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ht===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(tt)}const Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const Ht=u.getDepthInformation(Ct[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,r.renderState)}}for(let Ct=0;Ct<y.length;Ct++){const gt=b[Ct],Vt=y[Ct];gt!==null&&Vt!==void 0&&Vt.update(gt,rt,l||o)}yt&&yt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Kt=new ih;Kt.setAnimationLoop(jt),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const ai=new _n,s_=new $t;function o_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,b=S.envMapRotation;y&&(m.envMap.value=y,ai.copy(b),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function a_(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function l(S,y){let b=r[S.id];b===void 0&&(g(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(S,L);const C=t.render.frame;s[S.id]!==C&&(f(S),s[S.id]=C)}function h(S){const y=u();S.__bindingPointIndex=y;const b=i.createBuffer(),L=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],b=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,R=b.length;C<R;C++){const D=Array.isArray(b[C])?b[C]:[b[C]];for(let nt=0,v=D.length;nt<v;nt++){const E=D[nt];if(d(E,C,nt,L)===!0){const G=E.__offset,V=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let Y=0;Y<V.length;Y++){const O=V[Y],at=_(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,G+z,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,z),z+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,b,L){const C=S.value,R=y+"_"+b;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const D=L[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const y=S.uniforms;let b=0;const L=16;for(let R=0,D=y.length;R<D;R++){const nt=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,E=nt.length;v<E;v++){const G=nt[v],V=Array.isArray(G.value)?G.value:[G.value];for(let z=0,Y=V.length;z<Y;z++){const O=V[z],at=_(O),W=b%L,pt=W%at.boundary,bt=W+pt;b+=pt,bt!==0&&L-bt<at.storage&&(b+=L-bt),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=at.storage}}}const C=b%L;return C>0&&(b+=L-C),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class c_{constructor(t={}){const{canvas:e=Ku(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Yn,this.toneMappingExposure=1;const y=this;let b=!1,L=0,C=0,R=null,D=-1,nt=null;const v=new he,E=new he;let G=null;const V=new qt(0);let z=0,Y=e.width,O=e.height,at=1,W=null,pt=null;const bt=new he(0,0,Y,O),yt=new he(0,0,Y,O);let jt=!1;const Kt=new Na;let $=!1,rt=!1;const Ct=new $t,gt=new $t,Vt=new P,Ht=new he,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function tt(){return R===null?at:1}let w=n;function lt(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),w===null){const U="webgl2";if(w=lt(U,M),w===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ut,st,ft,Dt,Tt,A,x,F,Z,et,J,Lt,mt,Mt,Qt,it,Rt,Ot,kt,Et,ee,Gt,ce,I;function At(){ut=new dm(w),ut.init(),Gt=new jg(w,ut),st=new am(w,ut,t,Gt),ft=new Zg(w),st.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Dt=new gm(w),Tt=new Ug,A=new $g(w,ut,ft,Tt,st,Gt,Dt),x=new lm(y),F=new fm(y),Z=new Ef(w),ce=new sm(w,Z),et=new pm(w,Z,Dt,ce),J=new vm(w,et,Z,Dt),kt=new _m(w,st,A),it=new cm(Tt),Lt=new Dg(y,x,F,ut,st,ce,it),mt=new o_(y,Tt),Mt=new Og,Qt=new Hg(ut),Ot=new rm(y,x,F,ft,J,f,c),Rt=new Yg(y,J,st),I=new a_(w,Dt,st,ft),Et=new om(w,ut,Dt),ee=new mm(w,ut,Dt),Dt.programs=Lt.programs,y.capabilities=st,y.extensions=ut,y.properties=Tt,y.renderLists=Mt,y.shadowMap=Rt,y.state=ft,y.info=Dt}At();const X=new r_(y,w);this.xr=X,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(M){M!==void 0&&(at=M,this.setSize(Y,O,!1))},this.getSize=function(M){return M.set(Y,O)},this.setSize=function(M,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,O=U,e.width=Math.floor(M*at),e.height=Math.floor(U*at),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*at,O*at).floor()},this.setDrawingBufferSize=function(M,U,k){Y=M,O=U,at=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,U,k,H){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,U,k,H),ft.viewport(v.copy(bt).multiplyScalar(at).round())},this.getScissor=function(M){return M.copy(yt)},this.setScissor=function(M,U,k,H){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,k,H),ft.scissor(E.copy(yt).multiplyScalar(at).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){ft.setScissorTest(jt=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(M=!0,U=!0,k=!0){let H=0;if(M){let N=!1;if(R!==null){const ct=R.texture.format;N=ct===La||ct===Pa||ct===Ca}if(N){const ct=R.texture.type,St=ct===Cn||ct===di||ct===xr||ct===Wi||ct===Aa||ct===wa,Pt=Ot.getClearColor(),It=Ot.getClearAlpha(),Wt=Pt.r,Xt=Pt.g,Ut=Pt.b;St?(d[0]=Wt,d[1]=Xt,d[2]=Ut,d[3]=It,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=Wt,g[1]=Xt,g[2]=Ut,g[3]=It,w.clearBufferiv(w.COLOR,0,g))}else H|=w.COLOR_BUFFER_BIT}U&&(H|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Mt.dispose(),Qt.dispose(),Tt.dispose(),x.dispose(),F.dispose(),J.dispose(),ce.dispose(),I.dispose(),Lt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qn),X.removeEventListener("sessionend",Qi),en.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=Dt.autoReset,U=Rt.enabled,k=Rt.autoUpdate,H=Rt.needsUpdate,N=Rt.type;At(),Dt.autoReset=M,Rt.enabled=U,Rt.autoUpdate=k,Rt.needsUpdate=H,Rt.type=N}function wt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ne(M){const U=M.target;U.removeEventListener("dispose",ne),xe(U)}function xe(M){Ie(M),Tt.remove(M)}function Ie(M){const U=Tt.get(M).programs;U!==void 0&&(U.forEach(function(k){Lt.releaseProgram(k)}),M.isShaderMaterial&&Lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,H,N,ct){U===null&&(U=Bt);const St=N.isMesh&&N.matrixWorld.determinant()<0,Pt=Ir(M,U,k,H,N);ft.setMaterial(H,St);let It=k.index,Wt=1;if(H.wireframe===!0){if(It=et.getWireframeAttribute(k),It===void 0)return;Wt=2}const Xt=k.drawRange,Ut=k.attributes.position;let le=Xt.start*Wt,ue=(Xt.start+Xt.count)*Wt;ct!==null&&(le=Math.max(le,ct.start*Wt),ue=Math.min(ue,(ct.start+ct.count)*Wt)),It!==null?(le=Math.max(le,0),ue=Math.min(ue,It.count)):Ut!=null&&(le=Math.max(le,0),ue=Math.min(ue,Ut.count));const ge=ue-le;if(ge<0||ge===1/0)return;ce.setup(N,H,Pt,k,It);let ye,oe=Et;if(It!==null&&(ye=Z.get(It),oe=ee,oe.setIndex(ye)),N.isMesh)H.wireframe===!0?(ft.setLineWidth(H.wireframeLinewidth*tt()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(N.isLine){let Nt=H.linewidth;Nt===void 0&&(Nt=1),ft.setLineWidth(Nt*tt()),N.isLineSegments?oe.setMode(w.LINES):N.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else N.isPoints?oe.setMode(w.POINTS):N.isSprite&&oe.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Nt=N._multiDrawStarts,be=N._multiDrawCounts,ae=N._multiDrawCount,we=It?Z.get(It).bytesPerElement:1,Dn=Tt.get(H).currentProgram.getUniforms();for(let Fe=0;Fe<ae;Fe++)Dn.setValue(w,"_gl_DrawID",Fe),oe.render(Nt[Fe]/we,be[Fe])}else if(N.isInstancedMesh)oe.renderInstances(le,ge,N.count);else if(k.isInstancedBufferGeometry){const Nt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,Nt);oe.renderInstances(le,ge,be)}else oe.render(le,ge)};function ie(M,U,k){M.transparent===!0&&M.side===wn&&M.forceSinglePass===!1?(M.side=Ve,M.needsUpdate=!0,nn(M,U,k),M.side=Kn,M.needsUpdate=!0,nn(M,U,k),M.side=wn):nn(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),m=Qt.get(k),m.init(U),S.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let St=0;St<ct.length;St++){const Pt=ct[St];ie(Pt,k,N),H.add(Pt)}else ie(ct,k,N),H.add(ct)}),S.pop(),m=null,H},this.compileAsync=function(M,U,k=null){const H=this.compile(M,U,k);return new Promise(N=>{function ct(){if(H.forEach(function(St){Tt.get(St).currentProgram.isReady()&&H.delete(St)}),H.size===0){N(M);return}setTimeout(ct,10)}ut.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ae=null;function tn(M){Ae&&Ae(M)}function Qn(){en.stop()}function Qi(){en.start()}const en=new ih;en.setAnimationLoop(tn),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(M){Ae=M,X.setAnimationLoop(M),M===null?en.stop():en.start()},X.addEventListener("sessionstart",Qn),X.addEventListener("sessionend",Qi),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,R),m=Qt.get(M,S.length),m.init(U),S.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(gt),rt=this.localClippingEnabled,$=it.init(this.clippingPlanes,rt),_=Mt.get(M,p.length),_.init(),p.push(_),X.enabled===!0&&X.isPresenting===!0){const ct=y.xr.getDepthSensingMesh();ct!==null&&In(ct,U,-1/0,y.sortObjects)}In(M,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(W,pt),Yt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Yt&&Ot.addToRenderList(_,M),this.info.render.frame++,$===!0&&it.beginShadows();const k=m.state.shadowsArray;Rt.render(k,M,U),$===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let St=0,Pt=ct.length;St<Pt;St++){const It=ct[St];Pr(H,N,M,It)}Yt&&Ot.render(M);for(let St=0,Pt=ct.length;St<Pt;St++){const It=ct[St];Cr(_,M,It,It.viewport)}}else N.length>0&&Pr(H,N,M,U),Yt&&Ot.render(M),Cr(_,M,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(y,M,U),ce.resetDefaultState(),D=-1,nt=null,S.pop(),S.length>0?(m=S[S.length-1],$===!0&&it.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function In(M,U,k,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Kt.intersectsSprite(M)){H&&Ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);const St=J.update(M),Pt=M.material;Pt.visible&&_.push(M,St,Pt,k,Ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Kt.intersectsObject(M))){const St=J.update(M),Pt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ht.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ht.copy(St.boundingSphere.center)),Ht.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(Pt)){const It=St.groups;for(let Wt=0,Xt=It.length;Wt<Xt;Wt++){const Ut=It[Wt],le=Pt[Ut.materialIndex];le&&le.visible&&_.push(M,St,le,k,Ht.z,Ut)}}else Pt.visible&&_.push(M,St,Pt,k,Ht.z,null)}}const ct=M.children;for(let St=0,Pt=ct.length;St<Pt;St++)In(ct[St],U,k,H)}function Cr(M,U,k,H){const N=M.opaque,ct=M.transmissive,St=M.transparent;m.setupLightsView(k),$===!0&&it.setGlobalState(y.clippingPlanes,k),H&&ft.viewport(v.copy(H)),N.length>0&&vi(N,U,k),ct.length>0&&vi(ct,U,k),St.length>0&&vi(St,U,k),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Pr(M,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new pi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Tr:Cn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const ct=m.state.transmissionRenderTarget[H.id],St=H.viewport||v;ct.setSize(St.z,St.w);const Pt=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(V),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Ot.render(k);const It=y.toneMapping;y.toneMapping=Yn;const Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),$===!0&&it.setGlobalState(y.clippingPlanes,H),vi(M,k,H),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,le=U.length;Ut<le;Ut++){const ue=U[Ut],ge=ue.object,ye=ue.geometry,oe=ue.material,Nt=ue.group;if(oe.side===wn&&ge.layers.test(H.layers)){const be=oe.side;oe.side=Ve,oe.needsUpdate=!0,ti(ge,k,H,ye,oe,Nt),oe.side=be,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}y.setRenderTarget(Pt),y.setClearColor(V,z),Wt!==void 0&&(H.viewport=Wt),y.toneMapping=It}function vi(M,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=M.length;N<ct;N++){const St=M[N],Pt=St.object,It=St.geometry,Wt=H===null?St.material:H,Xt=St.group;Pt.layers.test(k.layers)&&ti(Pt,U,k,It,Wt,Xt)}}function ti(M,U,k,H,N,ct){M.onBeforeRender(y,U,k,H,N,ct),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,U,k,H,M,ct),N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,y.renderBufferDirect(k,U,H,N,M,ct),N.side=Kn,N.needsUpdate=!0,y.renderBufferDirect(k,U,H,N,M,ct),N.side=wn):y.renderBufferDirect(k,U,H,N,M,ct),M.onAfterRender(y,U,k,H,N,ct)}function nn(M,U,k){U.isScene!==!0&&(U=Bt);const H=Tt.get(M),N=m.state.lights,ct=m.state.shadowsArray,St=N.state.version,Pt=Lt.getParameters(M,N.state,ct,U,k),It=Lt.getProgramCacheKey(Pt);let Wt=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?F:x).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Wt===void 0&&(M.addEventListener("dispose",ne),Wt=new Map,H.programs=Wt);let Xt=Wt.get(It);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===St)return Lr(M,Pt),Xt}else Pt.uniforms=Lt.getUniforms(M),M.onBeforeCompile(Pt,y),Xt=Lt.acquireProgram(Pt,It),Wt.set(It,Xt),H.uniforms=Pt.uniforms;const Ut=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=it.uniform),Lr(M,Pt),H.needsLights=Bs(M),H.lightsStateVersion=St,H.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Xt,H.uniformsList=null,Xt}function fn(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=vs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Lr(M,U){const k=Tt.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Ir(M,U,k,H,N){U.isScene!==!0&&(U=Bt),A.resetTextureUnits();const ct=U.fog,St=H.isMeshStandardMaterial?U.environment:null,Pt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$n,It=(H.isMeshStandardMaterial?F:x).get(H.envMap||St),Wt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!k.morphAttributes.position,le=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let ge=Yn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=y.toneMapping);const ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ye!==void 0?ye.length:0,Nt=Tt.get(H),be=m.state.lights;if($===!0&&(rt===!0||M!==nt)){const He=M===nt&&H.id===D;it.setState(H,M,He)}let ae=!1;H.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==be.state.version||Nt.outputColorSpace!==Pt||N.isBatchedMesh&&Nt.batching===!1||!N.isBatchedMesh&&Nt.batching===!0||N.isBatchedMesh&&Nt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Nt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Nt.instancing===!1||!N.isInstancedMesh&&Nt.instancing===!0||N.isSkinnedMesh&&Nt.skinning===!1||!N.isSkinnedMesh&&Nt.skinning===!0||N.isInstancedMesh&&Nt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Nt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Nt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Nt.instancingMorph===!1&&N.morphTexture!==null||Nt.envMap!==It||H.fog===!0&&Nt.fog!==ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==it.numPlanes||Nt.numIntersection!==it.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==Xt||Nt.morphTargets!==Ut||Nt.morphNormals!==le||Nt.morphColors!==ue||Nt.toneMapping!==ge||Nt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Nt.__version=H.version);let we=Nt.currentProgram;ae===!0&&(we=nn(H,U,N));let Dn=!1,Fe=!1,tr=!1;const Me=we.getUniforms(),dn=Nt.uniforms;if(ft.useProgram(we.program)&&(Dn=!0,Fe=!0,tr=!0),H.id!==D&&(D=H.id,Fe=!0),Dn||nt!==M){st.reverseDepthBuffer?(Ct.copy(M.projectionMatrix),Ju(Ct),$u(Ct),Me.setValue(w,"projectionMatrix",Ct)):Me.setValue(w,"projectionMatrix",M.projectionMatrix),Me.setValue(w,"viewMatrix",M.matrixWorldInverse);const He=Me.map.cameraPosition;He!==void 0&&He.setValue(w,Vt.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&Me.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Me.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),nt!==M&&(nt=M,Fe=!0,tr=!0)}if(N.isSkinnedMesh){Me.setOptional(w,N,"bindMatrix"),Me.setOptional(w,N,"bindMatrixInverse");const He=N.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Me.setValue(w,"boneTexture",He.boneTexture,A))}N.isBatchedMesh&&(Me.setOptional(w,N,"batchingTexture"),Me.setValue(w,"batchingTexture",N._matricesTexture,A),Me.setOptional(w,N,"batchingIdTexture"),Me.setValue(w,"batchingIdTexture",N._indirectTexture,A),Me.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&Me.setValue(w,"batchingColorTexture",N._colorsTexture,A));const er=k.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&kt.update(N,k,we),(Fe||Nt.receiveShadow!==N.receiveShadow)&&(Nt.receiveShadow=N.receiveShadow,Me.setValue(w,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(dn.envMap.value=It,dn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),Fe&&(Me.setValue(w,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&Fs(dn,tr),ct&&H.fog===!0&&mt.refreshFogUniforms(dn,ct),mt.refreshMaterialUniforms(dn,H,at,O,m.state.transmissionRenderTarget[M.id]),vs.upload(w,fn(Nt),dn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vs.upload(w,fn(Nt),dn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Me.setValue(w,"center",N.center),Me.setValue(w,"modelViewMatrix",N.modelViewMatrix),Me.setValue(w,"normalMatrix",N.normalMatrix),Me.setValue(w,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const He=H.uniformsGroups;for(let nr=0,T=He.length;nr<T;nr++){const B=He[nr];I.update(B,we),I.bind(B,we)}}return we}function Fs(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Bs(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,U,k){Tt.get(M.texture).__webglTexture=U,Tt.get(M.depthTexture).__webglTexture=k;const H=Tt.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const k=Tt.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){R=M,L=U,C=k;let H=!0,N=null,ct=!1,St=!1;if(M){const It=Tt.get(M);if(It.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(It.__hasExternalTextures)A.rebindTextures(M,Tt.get(M.texture).__webglTexture,Tt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ut=M.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&Tt.has(Ut)&&(M.width!==Ut.image.width||M.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Wt=M.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);const Xt=Tt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][k]:N=Xt[U],ct=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?N=Tt.get(M).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[k]:N=Xt,v.copy(M.viewport),E.copy(M.scissor),G=M.scissorTest}else v.copy(bt).multiplyScalar(at).floor(),E.copy(yt).multiplyScalar(at).floor(),G=jt;if(ft.bindFramebuffer(w.FRAMEBUFFER,N)&&H&&ft.drawBuffers(M,N),ft.viewport(v),ft.scissor(E),ft.setScissorTest(G),ct){const It=Tt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,k)}else if(St){const It=Tt.get(M.texture),Wt=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,It.__webglTexture,k||0,Wt)}D=-1},this.readRenderTargetPixels=function(M,U,k,H,N,ct,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){ft.bindFramebuffer(w.FRAMEBUFFER,Pt);try{const It=M.texture,Wt=It.format,Xt=It.type;if(!st.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&k>=0&&k<=M.height-N&&w.readPixels(U,k,H,N,Gt.convert(Wt),Gt.convert(Xt),ct)}finally{const It=R!==null?Tt.get(R).__webglFramebuffer:null;ft.bindFramebuffer(w.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,H,N,ct,St){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){const It=M.texture,Wt=It.format,Xt=It.type;if(!st.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-H&&k>=0&&k<=M.height-N){ft.bindFramebuffer(w.FRAMEBUFFER,Pt);const Ut=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.bufferData(w.PIXEL_PACK_BUFFER,ct.byteLength,w.STREAM_READ),w.readPixels(U,k,H,N,Gt.convert(Wt),Gt.convert(Xt),0);const le=R!==null?Tt.get(R).__webglFramebuffer:null;ft.bindFramebuffer(w.FRAMEBUFFER,le);const ue=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Zu(w,ue,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ct),w.deleteBuffer(Ut),w.deleteSync(ue),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,k=0){M.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(M.image.width*H),ct=Math.floor(M.image.height*H),St=U!==null?U.x:0,Pt=U!==null?U.y:0;A.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,St,Pt,N,ct),ft.unbindTexture()},this.copyTextureToTexture=function(M,U,k=null,H=null,N=0){M.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let ct,St,Pt,It,Wt,Xt;k!==null?(ct=k.max.x-k.min.x,St=k.max.y-k.min.y,Pt=k.min.x,It=k.min.y):(ct=M.image.width,St=M.image.height,Pt=0,It=0),H!==null?(Wt=H.x,Xt=H.y):(Wt=0,Xt=0);const Ut=Gt.convert(U.format),le=Gt.convert(U.type);A.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const ue=w.getParameter(w.UNPACK_ROW_LENGTH),ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ye=w.getParameter(w.UNPACK_SKIP_PIXELS),oe=w.getParameter(w.UNPACK_SKIP_ROWS),Nt=w.getParameter(w.UNPACK_SKIP_IMAGES),be=M.isCompressedTexture?M.mipmaps[N]:M.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,be.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,be.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,It),M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Wt,Xt,ct,St,Ut,le,be.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Wt,Xt,be.width,be.height,Ut,be.data):w.texSubImage2D(w.TEXTURE_2D,N,Wt,Xt,ct,St,Ut,le,be),w.pixelStorei(w.UNPACK_ROW_LENGTH,ue),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,oe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nt),N===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k=null,H=null,N=0){M.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0);let ct,St,Pt,It,Wt,Xt,Ut,le,ue;const ge=M.isCompressedTexture?M.mipmaps[N]:M.image;k!==null?(ct=k.max.x-k.min.x,St=k.max.y-k.min.y,Pt=k.max.z-k.min.z,It=k.min.x,Wt=k.min.y,Xt=k.min.z):(ct=ge.width,St=ge.height,Pt=ge.depth,It=0,Wt=0,Xt=0),H!==null?(Ut=H.x,le=H.y,ue=H.z):(Ut=0,le=0,ue=0);const ye=Gt.convert(U.format),oe=Gt.convert(U.type);let Nt;if(U.isData3DTexture)A.setTexture3D(U,0),Nt=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Nt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const be=w.getParameter(w.UNPACK_ROW_LENGTH),ae=w.getParameter(w.UNPACK_IMAGE_HEIGHT),we=w.getParameter(w.UNPACK_SKIP_PIXELS),Dn=w.getParameter(w.UNPACK_SKIP_ROWS),Fe=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xt),M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Nt,N,Ut,le,ue,ct,St,Pt,ye,oe,ge.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Nt,N,Ut,le,ue,ct,St,Pt,ye,ge.data):w.texSubImage3D(Nt,N,Ut,le,ue,ct,St,Pt,ye,oe,ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,be),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ae),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&w.generateMipmap(Nt),ft.unbindTexture()},this.initRenderTarget=function(M){Tt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,ft.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ia?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Cs?"display-p3":"srgb"}}class hh extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Q0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=Qe()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new P;class uh{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),r=de(r,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $c=new P,jc=new he,Qc=new he,l_=new P,tl=new $t,ns=new P,go=new Pn,el=new $t,_o=new Ar;class tv extends se{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ic,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ns),this.boundingBox.expandByPoint(ns)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ns),this.boundingSphere.expandByPoint(ns)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(r),t.ray.intersectsSphere(go)!==!1&&(el.copy(r).invert(),_o.copy(t.ray).applyMatrix4(el),!(this.boundingBox!==null&&_o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,_o)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;jc.fromBufferAttribute(r.attributes.skinIndex,t),Qc.fromBufferAttribute(r.attributes.skinWeight,t),$c.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Qc.getComponent(s);if(o!==0){const a=jc.getComponent(s);tl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(l_.copy($c).applyMatrix4(tl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class h_ extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends De{constructor(t=null,e=1,n=1,r,s,o,a,c,l=We,h=We,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nl=new $t,u_=new $t;class dh{constructor(t=[],e=[]){this.uuid=Qe(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new $t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:u_;nl.multiplyMatrices(a,e[s]),nl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new fh(e,t,t,je,un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new h_),this.bones.push(o),this.boneInverses.push(new $t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const o=e[r];t.bones.push(o.uuid);const a=n[r];t.boneInverses.push(a.toArray())}return t}}class il extends Xe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new $t,rl=new $t,is=[],sl=new jn,f_=new $t,cr=new se,lr=new Pn;class ol extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,f_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),sl.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),lr.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Di),rl.multiplyMatrices(n,Di),cr.matrixWorld=rl,cr.raycast(t,is);for(let o=0,a=is.length;o<a;o++){const c=is[o];c.instanceId=s,c.object=this,e.push(c)}is.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(r*this.count),r,this.count,Ra,un));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class d_ extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new P,Ts=new P,al=new $t,hr=new Ar,rs=new Pn,vo=new P,cl=new P;class ph extends Ee{constructor(t=new Ue,e=new d_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)bs.fromBufferAttribute(e,r-1),Ts.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=bs.distanceTo(Ts);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,t.ray.intersectsSphere(rs)===!1)return;al.copy(r).invert(),hr.copy(t.ray).applyMatrix4(al);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),S=h.getX(_+1),y=ss(this,t,hr,c,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=ss(this,t,hr,c,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=ss(this,t,hr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ss(this,t,hr,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ss(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(bs.fromBufferAttribute(o,r),Ts.fromBufferAttribute(o,s),e.distanceSqToSegment(bs,Ts,vo,cl)>n)return;vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vo);if(!(c<t.near||c>t.far))return{distance:c,point:cl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const ll=new P,hl=new P;class ev extends ph{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)ll.fromBufferAttribute(e,r),hl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ll.distanceTo(hl);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nv extends ph{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class p_ extends _i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ul=new $t,va=new Ar,os=new Pn,as=new P;class iv extends Ee{constructor(t=new Ue,e=new p_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,t.ray.intersectsSphere(os)===!1)return;ul.copy(r).invert(),va.copy(t.ray).applyMatrix4(ul);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);as.fromBufferAttribute(u,m),fl(as,m,c,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)as.fromBufferAttribute(u,g),fl(as,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(i,t,e,n,r,s,o){const a=va.distanceSqToPoint(i);if(a<e){const c=new P;va.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class mh extends De{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new ht:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,r=[],s=[],o=[],a=new P,c=new $t;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fa extends vn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m_ extends Fa{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ba(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const cs=new P,xo=new Ba,yo=new Ba,Mo=new Ba;class gh extends vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(cs.subVectors(r[0],r[1]).add(r[0]),l=cs);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(cs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=cs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),yo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Mo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),yo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Mo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(xo.calc(c),yo.calc(c),Mo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dl(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function g_(i,t){const e=1-i;return e*e*t}function __(i,t){return 2*(1-i)*i*t}function v_(i,t){return i*i*t}function gr(i,t,e,n){return g_(i,t)+__(i,e)+v_(i,n)}function x_(i,t){const e=1-i;return e*e*e*t}function y_(i,t){const e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function S_(i,t){return i*i*i*t}function _r(i,t,e,n,r){return x_(i,t)+y_(i,e)+M_(i,n)+S_(i,r)}class _h extends vn{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,r.x,s.x,o.x,a.x),_r(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E_ extends vn{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,r.x,s.x,o.x,a.x),_r(t,r.y,s.y,o.y,a.y),_r(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vh extends vn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b_ extends vn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends vn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(gr(t,r.x,s.x,o.x),gr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends vn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(gr(t,r.x,s.x,o.x),gr(t,r.y,s.y,o.y),gr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(dl(a,c.x,l.x,h.x,u.x),dl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ht().fromArray(r))}return this}}var xa=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:gh,CubicBezierCurve:_h,CubicBezierCurve3:E_,EllipseCurve:Fa,LineCurve:vh,LineCurve3:b_,QuadraticBezierCurve:xh,QuadraticBezierCurve3:T_,SplineCurve:yh});class A_ extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new xa[r.type]().fromJSON(r))}return this}}class ya extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vh(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new xh(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new _h(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new Fa(t,e,n,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mr extends Ue{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new ht,d=new P,g=new P,_=new P;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*r,b=Math.sin(y),L=Math.cos(y);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),f.x=S/e,f.y=C/(t.length-1),a.push(f.x,f.y);const R=c[3*C+0]*b,D=c[3*C+1],nt=c[3*C+0]*L;l.push(R,D,nt)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const b=y+S*t.length,L=b,C=b+t.length,R=b+t.length+1,D=b+1;s.push(L,C,D),s.push(R,D,C)}this.setIndex(s),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.points,t.segments,t.phiStart,t.phiLength)}}class za extends Ue{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function S(){const b=new P,L=new P;let C=0;const R=(e-t)/n;for(let D=0;D<=s;D++){const nt=[],v=D/s,E=v*(e-t)+t;for(let G=0;G<=r;G++){const V=G/r,z=V*c+a,Y=Math.sin(z),O=Math.cos(z);L.x=E*Y,L.y=-v*n+m,L.z=E*O,u.push(L.x,L.y,L.z),b.set(Y,R,O).normalize(),f.push(b.x,b.y,b.z),d.push(V,1-v),nt.push(g++)}_.push(nt)}for(let D=0;D<r;D++)for(let nt=0;nt<s;nt++){const v=_[nt][D],E=_[nt+1][D],G=_[nt+1][D+1],V=_[nt][D+1];t>0&&(h.push(v,E,V),C+=3),e>0&&(h.push(E,G,V),C+=3)}l.addGroup(p,C,0),p+=C}function y(b){const L=g,C=new ht,R=new P;let D=0;const nt=b===!0?t:e,v=b===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;const E=g;for(let G=0;G<=r;G++){const z=G/r*c+a,Y=Math.cos(z),O=Math.sin(z);R.x=nt*O,R.y=m*v,R.z=nt*Y,u.push(R.x,R.y,R.z),f.push(0,v,0),C.x=Y*.5+.5,C.y=O*.5*v+.5,d.push(C.x,C.y),g++}for(let G=0;G<r;G++){const V=L+G,z=E+G;b===!0?h.push(z,z+1,V):h.push(z+1,z,V),D+=3}l.addGroup(p,D,b===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ls extends ya{constructor(t){super(t),this.uuid=Qe(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ya().fromJSON(r))}return this}}const w_={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Mh(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,f,d;if(n&&(s=I_(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Sr(s,o,e,a,c,d,0),o}};function Mh(i,t,e,n,r){let s,o;if(r===G_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=pl(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=pl(s,i[s],i[s+1],o);return o&&Is(o,o.next)&&(br(o),o=o.next),o}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||Se(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&F_(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?C_(i,n,r,s):R_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=P_(gi(i),t,e),Sr(i,t,e,n,r,s,2)):o===2&&L_(i,t,e,n,r,s):Sr(gi(i),t,e,n,r,s,1);break}}}function R_(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Fi(r,a,s,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Se(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Ma(d,g,t,e,n),S=Ma(_,m,t,e,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=p&&b&&b.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Fi(a,h,c,u,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&Fi(a,h,c,u,l,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Fi(a,h,c,u,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&Fi(a,h,c,u,l,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function P_(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Is(r,s)&&Sh(r,n,n.next,s)&&Er(r,s)&&Er(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),br(n),br(n.next),n=i=s),n=n.next}while(n!==i);return gi(n)}function L_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k_(o,a)){let c=Eh(o,a);o=gi(o,o.next),c=gi(c,c.next),Sr(o,t,e,n,r,s,0),Sr(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function I_(i,t,e,n){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Mh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(z_(l));for(r.sort(D_),s=0;s<r.length;s++)e=U_(r[s],e);return e}function D_(i,t){return i.x-t.x}function U_(i,t){const e=N_(i,t);if(!e)return t;const n=Eh(e,i);return gi(n,n.next),gi(e,e.next)}function N_(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Fi(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Er(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&O_(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function O_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function F_(i,t,e,n){let r=i;do r.z===0&&(r.z=Ma(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,B_(r)}function B_(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Ma(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fi(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function k_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!V_(i,t)&&(Er(i,t)&&Er(t,i)&&H_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Is(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Is(i,t){return i.x===t.x&&i.y===t.y}function Sh(i,t,e,n){const r=hs(Se(i,t,e)),s=hs(Se(i,t,n)),o=hs(Se(e,n,i)),a=hs(Se(e,n,t));return!!(r!==s&&o!==a||r===0&&ls(i,e,t)||s===0&&ls(i,n,t)||o===0&&ls(e,i,n)||a===0&&ls(e,t,n))}function ls(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hs(i){return i>0?1:i<0?-1:0}function V_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function H_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Eh(i,t){const e=new Sa(i.i,i.x,i.y),n=new Sa(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function pl(i,t,e,n){const r=new Sa(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class vr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return vr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];ml(t),gl(n,t);let o=t.length;e.forEach(ml);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,gl(n,e[c]);const a=w_.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ml(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class wr extends Ue{constructor(t=new Ls([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:W_;let y,b=!1,L,C,R,D;p&&(y=p.getSpacedPoints(h),b=!0,f=!1,L=p.computeFrenetFrames(h,!1),C=new P,R=new P,D=new P),f||(m=0,d=0,g=0,_=0);const nt=a.extractPoints(l);let v=nt.shape;const E=nt.holes;if(!vr.isClockWise(v)){v=v.reverse();for(let tt=0,w=E.length;tt<w;tt++){const lt=E[tt];vr.isClockWise(lt)&&(E[tt]=lt.reverse())}}const V=vr.triangulateShape(v,E),z=v;for(let tt=0,w=E.length;tt<w;tt++){const lt=E[tt];v=v.concat(lt)}function Y(tt,w,lt){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(w,lt)}const O=v.length,at=V.length;function W(tt,w,lt){let ut,st,ft;const Dt=tt.x-w.x,Tt=tt.y-w.y,A=lt.x-tt.x,x=lt.y-tt.y,F=Dt*Dt+Tt*Tt,Z=Dt*x-Tt*A;if(Math.abs(Z)>Number.EPSILON){const et=Math.sqrt(F),J=Math.sqrt(A*A+x*x),Lt=w.x-Tt/et,mt=w.y+Dt/et,Mt=lt.x-x/J,Qt=lt.y+A/J,it=((Mt-Lt)*x-(Qt-mt)*A)/(Dt*x-Tt*A);ut=Lt+Dt*it-tt.x,st=mt+Tt*it-tt.y;const Rt=ut*ut+st*st;if(Rt<=2)return new ht(ut,st);ft=Math.sqrt(Rt/2)}else{let et=!1;Dt>Number.EPSILON?A>Number.EPSILON&&(et=!0):Dt<-Number.EPSILON?A<-Number.EPSILON&&(et=!0):Math.sign(Tt)===Math.sign(x)&&(et=!0),et?(ut=-Tt,st=Dt,ft=Math.sqrt(F)):(ut=Dt,st=Tt,ft=Math.sqrt(F/2))}return new ht(ut/ft,st/ft)}const pt=[];for(let tt=0,w=z.length,lt=w-1,ut=tt+1;tt<w;tt++,lt++,ut++)lt===w&&(lt=0),ut===w&&(ut=0),pt[tt]=W(z[tt],z[lt],z[ut]);const bt=[];let yt,jt=pt.concat();for(let tt=0,w=E.length;tt<w;tt++){const lt=E[tt];yt=[];for(let ut=0,st=lt.length,ft=st-1,Dt=ut+1;ut<st;ut++,ft++,Dt++)ft===st&&(ft=0),Dt===st&&(Dt=0),yt[ut]=W(lt[ut],lt[ft],lt[Dt]);bt.push(yt),jt=jt.concat(yt)}for(let tt=0;tt<m;tt++){const w=tt/m,lt=d*Math.cos(w*Math.PI/2),ut=g*Math.sin(w*Math.PI/2)+_;for(let st=0,ft=z.length;st<ft;st++){const Dt=Y(z[st],pt[st],ut);gt(Dt.x,Dt.y,-lt)}for(let st=0,ft=E.length;st<ft;st++){const Dt=E[st];yt=bt[st];for(let Tt=0,A=Dt.length;Tt<A;Tt++){const x=Y(Dt[Tt],yt[Tt],ut);gt(x.x,x.y,-lt)}}}const Kt=g+_;for(let tt=0;tt<O;tt++){const w=f?Y(v[tt],jt[tt],Kt):v[tt];b?(R.copy(L.normals[0]).multiplyScalar(w.x),C.copy(L.binormals[0]).multiplyScalar(w.y),D.copy(y[0]).add(R).add(C),gt(D.x,D.y,D.z)):gt(w.x,w.y,0)}for(let tt=1;tt<=h;tt++)for(let w=0;w<O;w++){const lt=f?Y(v[w],jt[w],Kt):v[w];b?(R.copy(L.normals[tt]).multiplyScalar(lt.x),C.copy(L.binormals[tt]).multiplyScalar(lt.y),D.copy(y[tt]).add(R).add(C),gt(D.x,D.y,D.z)):gt(lt.x,lt.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const w=tt/m,lt=d*Math.cos(w*Math.PI/2),ut=g*Math.sin(w*Math.PI/2)+_;for(let st=0,ft=z.length;st<ft;st++){const Dt=Y(z[st],pt[st],ut);gt(Dt.x,Dt.y,u+lt)}for(let st=0,ft=E.length;st<ft;st++){const Dt=E[st];yt=bt[st];for(let Tt=0,A=Dt.length;Tt<A;Tt++){const x=Y(Dt[Tt],yt[Tt],ut);b?gt(x.x,x.y+y[h-1].y,y[h-1].x+lt):gt(x.x,x.y,u+lt)}}}$(),rt();function $(){const tt=r.length/3;if(f){let w=0,lt=O*w;for(let ut=0;ut<at;ut++){const st=V[ut];Vt(st[2]+lt,st[1]+lt,st[0]+lt)}w=h+m*2,lt=O*w;for(let ut=0;ut<at;ut++){const st=V[ut];Vt(st[0]+lt,st[1]+lt,st[2]+lt)}}else{for(let w=0;w<at;w++){const lt=V[w];Vt(lt[2],lt[1],lt[0])}for(let w=0;w<at;w++){const lt=V[w];Vt(lt[0]+O*h,lt[1]+O*h,lt[2]+O*h)}}n.addGroup(tt,r.length/3-tt,0)}function rt(){const tt=r.length/3;let w=0;Ct(z,w),w+=z.length;for(let lt=0,ut=E.length;lt<ut;lt++){const st=E[lt];Ct(st,w),w+=st.length}n.addGroup(tt,r.length/3-tt,1)}function Ct(tt,w){let lt=tt.length;for(;--lt>=0;){const ut=lt;let st=lt-1;st<0&&(st=tt.length-1);for(let ft=0,Dt=h+m*2;ft<Dt;ft++){const Tt=O*ft,A=O*(ft+1),x=w+ut+Tt,F=w+st+Tt,Z=w+st+A,et=w+ut+A;Ht(x,F,Z,et)}}}function gt(tt,w,lt){c.push(tt),c.push(w),c.push(lt)}function Vt(tt,w,lt){Bt(tt),Bt(w),Bt(lt);const ut=r.length/3,st=S.generateTopUV(n,r,ut-3,ut-2,ut-1);Yt(st[0]),Yt(st[1]),Yt(st[2])}function Ht(tt,w,lt,ut){Bt(tt),Bt(w),Bt(ut),Bt(w),Bt(lt),Bt(ut);const st=r.length/3,ft=S.generateSideWallUV(n,r,st-6,st-3,st-2,st-1);Yt(ft[0]),Yt(ft[1]),Yt(ft[3]),Yt(ft[1]),Yt(ft[2]),Yt(ft[3])}function Bt(tt){r.push(c[tt*3+0]),r.push(c[tt*3+1]),r.push(c[tt*3+2])}function Yt(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return X_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new xa[r.type]().fromJSON(r)),new wr(n,t.options)}}const W_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new ht(s,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(f,1-g),new ht(_,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(d,1-g),new ht(m,1-p)]}};function X_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ka extends Ue{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/r,d=new P,g=new ht;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,b=S+n+1,L=S+n+2,C=S+1;a.push(y,b,C),a.push(b,L,C)}}this.setIndex(a),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Va extends Ue{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+b,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],b=h[p][S],L=h[p+1][S],C=h[p+1][S+1];(p!==0||o>0)&&d.push(y,b,C),(p!==n-1||c<Math.PI)&&d.push(b,L,C)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ha extends Ue{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hn extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class q_ extends Hn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function us(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Y_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function K_(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function _l(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)r[o++]=i[a+c]}return r}function bh(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=i[r++];while(s!==void 0)}class Ds{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z_ extends Ds{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sc:s=t,a=2*e-n;break;case oc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sc:o=t,c=2*n-e;break;case oc:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+S*o[l+L]+y*o[c+L]+b*o[u+L];return s}}class J_ extends Ds{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}}class $_ extends Ds{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class xn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new J_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Z_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xs:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ks:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ks}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Y_(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ks,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=da;class $i extends xn{constructor(t,e,n){super(t,e,n)}}$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=xs;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Th extends xn{}Th.prototype.ValueTypeName="color";class As extends xn{}As.prototype.ValueTypeName="number";class j_ extends Ds{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e);let l=t*a;for(let h=l+a;l!==h;l+=4)ln.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Us extends xn{InterpolantFactoryMethodLinear(t){return new j_(this.times,this.values,this.getValueSize(),t)}}Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends xn{constructor(t,e,n){super(t,e,n)}}ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=xs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends xn{}ws.prototype.ValueTypeName="vector";class rv{constructor(t="",e=-1,n=[],r=vu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=Qe(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(t0(n[o]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(xn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=K_(c);c=_l(c,1,h),l=_l(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new As(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];bh(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},r=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new As(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(ws,d+".position",f,"pos",r),n(Us,d+".quaternion",f,"rot",r),n(ws,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Q_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Th;case"quaternion":return Us;case"bool":case"boolean":return $i;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function t0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Q_(i.type);if(i.times===void 0){const e=[],n=[];bh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Wn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class e0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const n0=new e0;class Rr{constructor(t){this.manager=t!==void 0?t:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class i0 extends Error{constructor(t,e){super(t),this.response=e}}class sv extends Rr{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Wn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:r});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Tn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,R=h.length;C<R;C++){const D=h[C];D.onProgress&&D.onProgress(L)}p.enqueue(b),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new i0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Wn.add(t,l);const h=Tn[t];delete Tn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Tn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Tn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class r0 extends Rr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wn.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=yr("img");function c(){h(),Wn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ov extends Rr{constructor(t){super(t)}load(t,e,n,r){const s=new De,o=new r0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ns extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class s0 extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const So=new $t,vl=new P,xl=new P;class Ga{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(vl),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class o0 extends Ga{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=qi*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class av extends Ns{constructor(t,e,n=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new o0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yl=new $t,ur=new P,Eo=new P;class a0 extends Ga{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),r.makeTranslation(-ur.x,-ur.y,-ur.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class c0 extends Ns{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class l0 extends Ga{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ml extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new l0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cv{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class lv extends Rr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wn.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){r&&r(l),Wn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Wn.add(t,c),s.manager.itemStart(t)}}const Wa="\\[\\]\\.:\\/",h0=new RegExp("["+Wa+"]","g"),Xa="[^"+Wa+"]",u0="[^"+Wa.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Xa),d0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),g0=new RegExp("^"+f0+d0+p0+m0+"$"),_0=["material","materials","bones","map"];class v0{constructor(t,e,n){const r=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pe{constructor(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(t){const e=g0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);_0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let s=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[r];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pe.Composite=v0;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Sl=new $t;class x0{constructor(t,e,n=0,r=1/0){this.ray=new Ar(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sl),this}intersectObject(t,e=!0,n=[]){return Ea(t,this,n,e),n.sort(El),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ea(t[r],this,n,e);return n.sort(El),n}}function El(i,t){return i.distance-t.distance}function Ea(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ea(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Ze={light:"#E7D9BB",dark:"#2C021B",markOnLight:"#7E6430",markOnDark:"#E2C88A",strongOnLight:"#241722",strongOnDark:"#F3E9EC",lastOnLight:"#D9C390",lastOnDark:"#651A40",check:"#E4466A",inlay:"rgba(171,140,79,.55)"},y0="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.6l-6.3 3.6 1.5-7.1L1.8 9.2 9 8.4z";function M0(i,t=!1){const e=i/8,n=document.createElement("canvas");n.width=n.height=i;const r=n.getContext("2d"),s=document.createElement("canvas");s.width=s.height=i,S0(s.getContext("2d"),i);let o=null;try{o=new Path2D(y0)}catch{}function a(c){const l=c.marks;r.setTransform(1,0,0,1,0,0),t?r.clearRect(0,0,i,i):r.drawImage(s,0,0);const h=new Set(l.targets??[]),u=new Set(l.stars??[]),f=new Set(l.focus??[]),d=new Set([l.hint?.from,l.hint?.to].filter(Pl)),g=c.orientation==="b";for(let _=0;_<8;_++)for(let m=0;m<8;m++){const p=Ih(m,_),S=(m+_)%2===0,y=S?Ze.markOnDark:Ze.markOnLight,b=S?Ze.strongOnDark:Ze.strongOnLight,L=e/2;r.setTransform(1,0,0,1,(m+.5)*e,(7-_+.5)*e),g&&r.rotate(Math.PI);const C=c.occupied(p);if(l.lastMove&&(l.lastMove.from===p||l.lastMove.to===p)&&(r.fillStyle=S?Ze.lastOnDark:Ze.lastOnLight,r.globalAlpha=t?.55:1,r.fillRect(-L,-L,e,e),r.globalAlpha=1,r.fillStyle=y,r.beginPath(),r.moveTo(-L,-L),r.lineTo(-L+e*.28,-L),r.lineTo(-L,-L+e*.28),r.closePath(),r.fill()),l.check===p){const R=r.createRadialGradient(0,e*.05,0,0,e*.05,L*1.1);R.addColorStop(0,Ze.check),R.addColorStop(.35,"rgba(228,70,106,.75)"),R.addColorStop(1,"rgba(228,70,106,0)"),r.fillStyle=R,r.fillRect(-L,-L,e,e),r.lineWidth=e*.035,r.strokeStyle=Ze.check,r.strokeRect(-L+e*.03,-L+e*.03,e*.94,e*.94),r.strokeStyle=y,r.strokeRect(-L+e*.075,-L+e*.075,e*.85,e*.85)}if(l.selected===p){const R=e*.08;r.lineWidth=R,r.strokeStyle=y,r.strokeRect(-L+R/2,-L+R/2,e-R,e-R)}if(h.has(p)&&(r.fillStyle=y,r.strokeStyle=y,C?(r.lineWidth=e*.075,r.beginPath(),r.arc(0,0,L*.9,0,Math.PI*2),r.stroke()):(r.beginPath(),r.arc(0,0,e*.15,0,Math.PI*2),r.fill(),r.lineWidth=e*.02,r.strokeStyle="rgba(42,3,24,.35)",r.stroke())),d.has(p)&&(r.setLineDash([e*.09,e*.06]),r.lineWidth=e*.035,r.strokeStyle=y,r.beginPath(),r.roundRect(-L+e*.1,-L+e*.1,e*.8,e*.8,e*.1),r.stroke(),r.setLineDash([])),u.has(p)){const R=C?.3:.5;r.save(),C&&r.translate(L-e*.19,-L+e*.19),r.scale(e*R/24,e*R/24),r.translate(-12,-12),r.fillStyle="#D4B978",r.strokeStyle="#241722",r.lineWidth=1.6,r.lineJoin="round",o?(r.fill(o),r.stroke(o)):(r.beginPath(),r.arc(12,12,9,0,Math.PI*2),r.fill(),r.stroke()),r.restore()}if(c.over===p&&(r.lineWidth=e*.05,r.strokeStyle=b,r.strokeRect(-L+e*.025,-L+e*.025,e*.95,e*.95)),c.focus===p&&(r.lineWidth=e*.05,r.strokeStyle=b,r.strokeRect(-L+e*.03,-L+e*.03,e*.94,e*.94),r.lineWidth=e*.05,r.strokeStyle="#D4B978",r.strokeRect(-L+e*.08,-L+e*.08,e*.84,e*.84)),c.coordinates){r.font=`600 ${Math.round(e*.19)}px system-ui, sans-serif`,r.fillStyle=S?Ze.light:Ze.dark;const R=g?7-m:m,D=g?_:7-_;R===0&&(r.textAlign="left",r.textBaseline="top",r.fillText(p[1],-L+e*.07,-L+e*.06)),D===7&&(r.textAlign="right",r.textBaseline="bottom",r.fillText(p[0],L-e*.08,L-e*.05))}f.size&&!f.has(p)&&(r.fillStyle="rgba(42,3,24,.58)",r.fillRect(-L,-L,e,e))}r.setTransform(1,0,0,1,0,0)}return{canvas:n,draw:a}}function S0(i,t){const e=t/8;for(let c=0;c<8;c++)for(let l=0;l<8;l++)i.fillStyle=(l+c)%2===0?Ze.dark:Ze.light,i.fillRect(l*e,(7-c)*e,e,e);const n=document.createElement("canvas");n.width=12,n.height=44;const r=n.getContext("2d"),s=r.createImageData(12,44);let o=7;const a=()=>(o=o*16807%2147483647,o/2147483647);for(let c=0;c<528;c++){const l=90+a()*130;s.data[c*4]=s.data[c*4+1]=s.data[c*4+2]=l,s.data[c*4+3]=255}r.putImageData(s,0,0),i.save(),i.globalAlpha=.07,i.globalCompositeOperation="overlay",i.imageSmoothingEnabled=!0,i.translate(t/2,t/2),i.rotate(.35),i.drawImage(n,-t*.8,-t*.8,t*1.6,t*1.6),i.restore(),i.strokeStyle=Ze.inlay,i.lineWidth=Math.max(1,t/700);for(let c=1;c<8;c++)i.beginPath(),i.moveTo(c*e,0),i.lineTo(c*e,t),i.stroke(),i.beginPath(),i.moveTo(0,c*e),i.lineTo(t,c*e),i.stroke()}function Ah(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Ue;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in s){const u=bl(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=bl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function bl(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new Xe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return r!==void 0&&(a.gpuType=r),a}function hv(i,t){if(t===xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===ac||t===yu){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,r=[];if(t===ac)for(let o=1;o<=n;o++)r.push(e.getX(0)),r.push(e.getX(o)),r.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(e.getX(o)),r.push(e.getX(o+1)),r.push(e.getX(o+2))):(r.push(e.getX(o+2)),r.push(e.getX(o+1)),r.push(e.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}const Tl=.46,wh=2.35,E0=[[0,0],[.07,0],[.05,.09],[.02,.16],[0,.18]],b0=[[0,0],[.64,0],[.64,.1],[.5,.3],[.42,.5],[.46,1.2],[.5,1.6],[.36,2.1],[.1,2.35],[0,2.35]],T0={p:gn.pawn,b:gn.bishop,r:[...gn.rook,[mn.r+mn.size/2,mn.top],[0,mn.top]],q:[...Ll,...Il,[.4,3.45],[0,3.45]],k:[...gn.king,[Ni.aw,Ni.y+Ni.h],[0,Ni.y+Ni.h]],n:b0},A0={p:1.56,n:wh,b:2.6,r:mn.top,q:3.45,k:3.46},w0={p:.6,n:.64,b:.66,r:.66,q:.88,k:.7};function R0(i,t){return new gh(i.map(([n,r])=>new P(n,r,0)),!1,"catmullrom",.08).getPoints(t).map(n=>new ht(Math.max(n.x,0),n.y))}function Xn(i){let t=i.index?i.toNonIndexed():i;t!==i&&i.dispose();for(const e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t=Rh(t),t}function Rh(i){for(const t of["position","normal"]){const e=i.getAttribute(t);if(!e||e.array instanceof Float32Array&&!e.normalized)continue;const n=new Float32Array(e.count*3);for(let r=0;r<e.count;r++)n[r*3]=e.getX(r),n[r*3+1]=e.getY(r),n[r*3+2]=e.getZ(r);i.setAttribute(t,new Xe(n,3))}return i}function Ki(i,t,e){return Xn(new Mr(R0(i,e),t))}function C0(i){const t=[Ki(Ll,i?28:40,i?44:64)],e=new Mr(Il.map(([a,c])=>new ht(a,c)),i?32:48),n=e.attributes.position;for(let a=0;a<n.count;a++){const c=n.getX(a),l=n.getY(a),h=n.getZ(a),u=ma.smoothstep(l,3.15,3.27);if(u<=0)continue;const f=Math.atan2(h,c),d=1+.07*Math.cos(8*f)*u;n.setXYZ(a,c*d,l+.02*Math.cos(8*f)*u,h*d)}e.computeVertexNormals(),t.push(Xn(e));const r=new Mr(E0.map(([a,c])=>new ht(a,c)),6);for(let a=0;a<8;a++){const c=r.clone();c.rotateZ(-ma.degToRad(18)),c.translate(.365,3.27,0),c.rotateY(-(a/8)*Math.PI*2),t.push(Xn(c))}r.dispose();const s=new za(.035,.05,.16,8,1,!0);s.translate(0,3.19,0);const o=new Va(.075,12,8);return o.translate(0,3.33,0),t.push(Xn(s),Xn(o)),Os(t)}function P0(i){const{w:t,aw:e,h:n,a0:r,a1:s,y:o}=Ni,a=new Ls;a.moveTo(-t,-n),a.lineTo(t,-n),a.lineTo(t,r),a.lineTo(e,r),a.lineTo(e,s),a.lineTo(t,s),a.lineTo(t,n),a.lineTo(-t,n),a.lineTo(-t,s),a.lineTo(-e,s),a.lineTo(-e,r),a.lineTo(-t,r),a.closePath();const c=new wr(a,{depth:.08,bevelEnabled:!0,bevelSize:.012,bevelThickness:.01,bevelSegments:2});return c.translate(0,o,-.04),Os([Ki(gn.king,i?24:36,i?36:50),Xn(c)])}function L0(i){const t=[Ki(gn.rook,i?24:36,30)],e=gn.rook[gn.rook.length-1][1],n=mn.top-e+.02;for(let r=0;r<6;r++){const s=r/6*Math.PI*2,o=new Ln(mn.size,n,mn.size);o.rotateY(-s),o.translate(Math.cos(s)*mn.r,e-.02+n/2,Math.sin(s)*mn.r),t.push(Xn(o))}return Os(t)}function I0(i){const t=Ki([[0,0],[.64,0],[.64,.1],[.52,.24],[.4,.36],[.34,.5],[0,.52]],28,16),e=new Ls,n=[[-.34,.45],[-.4,1.2],[-.28,1.75],[-.08,2.12],[-.02,2.35],[.1,2.14],[.26,2],[.56,1.58],[.58,1.42],[.4,1.34],[.16,1.3],[.2,.9],[.32,.45]];e.moveTo(n[0][0],n[0][1]);for(const[s,o]of n.slice(1))e.lineTo(s,o);e.closePath();const r=new wr(e,{depth:.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.06,bevelSegments:3,curveSegments:4});return r.translate(0,0,-.15),r.rotateY(Math.PI/2),Os([t,Xn(r)])}function Os(i){const t=Ah(i,!1);for(const e of i)e.dispose();return t.computeBoundingSphere(),t}function D0(i,t){switch(i){case"p":return Ki(gn.pawn,t?20:28,t?26:34);case"b":return Ki(gn.bishop,t?24:32,t?34:44);case"r":return L0(t);case"q":return C0(t);case"k":return P0(t);case"n":return I0()}}async function U0(i){const[{GLTFLoader:t},{MeshoptDecoder:e}]=await Promise.all([qa(()=>import("./GLTFLoader-K4oM52sQ.js"),__vite__mapDeps([0,1,2]),import.meta.url),qa(()=>import("./meshopt_decoder.module-BbCP70j-.js"),[],import.meta.url)]),n=new t;n.setMeshoptDecoder(e);const r=await n.loadAsync(i);r.scene.updateMatrixWorld(!0);const s=[];if(r.scene.traverse(h=>{const u=h;if(!u.isMesh||!u.geometry)return;const f=new Ue,d=u.geometry;f.setAttribute("position",d.getAttribute("position")),d.getAttribute("normal")&&f.setAttribute("normal",d.getAttribute("normal")),d.index&&f.setIndex(d.index);const g=Rh(f.index?f.toNonIndexed():f);g.getAttribute("normal")||g.computeVertexNormals(),g.applyMatrix4(u.matrixWorld),s.push(g),d.dispose();const _=u.material;(Array.isArray(_)?_:[_]).forEach(m=>m.dispose())}),!s.length)throw new Error("knight: no meshes");const o=Ah(s,!1);for(const h of s)h.dispose();o.computeBoundingBox();const a=o.boundingBox,c=a.max.y-a.min.y;if(!(c>0))throw new Error("knight: empty bounds");const l=wh/c;return o.translate(0,-a.min.y,0),o.scale(l,l,l),o.rotateY(Math.PI),o.computeBoundingSphere(),o}const N0=["p","n","b","r","q","k"];function Ch(i){const t={};for(const e of N0)t[e]={geometry:D0(e,i),heightScale:1,outline:T0[e],height:A0[e],baseR:w0[e]};return t}function Ph(i){return{async loadPieceSet(){const t=Ch(i.low);if(i.knightUrl)try{const e=await U0(i.low?i.knightUrl.replace(/knight\.glb$/,"knight_low.glb"):i.knightUrl);t.n.geometry.dispose(),t.n={...t.n,geometry:e,outline:O0(e),baseR:.66}}catch(e){console.warn("[board3d] knight model unavailable, keeping the placeholder",e)}return t}}}function O0(i,t=20){const e=i.getAttribute("position");let n=0;for(let o=0;o<e.count;o++)n=Math.max(n,e.getY(o));const r=new Array(t+1).fill(0);for(let o=0;o<e.count;o++){const a=e.getY(o),c=Math.min(t,Math.max(0,Math.round(a/Math.max(n,1e-6)*t)));r[c]=Math.max(r[c],Math.hypot(e.getX(o),e.getZ(o)))}const s=[[0,0]];return r.forEach((o,a)=>s.push([o,a/t*n])),s.push([0,n]),s}class F0 extends hh{constructor(){super();const t=new Ln;t.deleteAttribute("uv");const e=new Hn({side:Ve}),n=new Hn,r=new c0(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new se(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new se(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new se(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new se(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new se(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new se(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new se(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new se(t,Ui(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new se(t,Ui(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new se(t,Ui(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new se(t,Ui(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new se(t,Ui(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new se(t,Ui(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ui(i){const t=new Zn;return t.color.setScalar(i),t}function B0(i){const t=new F0,e=new qt(1,.9,.74);t.traverse(h=>{const u=h.material;h.isMesh&&u?.isMeshBasicMaterial&&u.color.multiply(e)});const n=new Ln,r=new Zn({color:new qt(9,6.8,4)}),s=new se(n,r);s.position.set(-9.5,6,7.5),s.rotation.y=.75,s.scale.set(.12,7.5,2.4);const o=new Zn({color:new qt(3,4.5,8)}),a=new se(n,o);a.position.set(9.5,5,-6.5),a.rotation.y=.75,a.scale.set(.12,6,2.2),t.add(s,a);const c=new ga(i),l=c.fromScene(t,.04).texture;return c.dispose(),n.dispose(),r.dispose(),o.dispose(),t.traverse(h=>{const u=h;u.isMesh&&(u.geometry.dispose(),u.material.dispose())}),l}function Al(i,t,e,n){const r={value:new qt(t)},s={value:e};return i.onBeforeCompile=o=>{o.uniforms.uRim=r,o.uniforms.uRimAmt=s,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimAmt;`).replace("#include <opaque_fragment>",`{
  float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), ${n.toFixed(2)});
  vec3 rimC = uRim;
  #ifdef USE_INSTANCING_COLOR
  rimC *= vColor;
  #endif
  outgoingLight = mix(outgoingLight, rimC, clamp(fr * uRimAmt, 0.0, 1.0));
}
#include <opaque_fragment>`)},i.customProgramCacheKey=()=>`rim${n}`,s}function z0(i,t,e){const n=new Hn({color:12882494,metalness:1,roughness:.32,envMapIntensity:.95});Al(n,3806240,.5,3);const r=i?new Hn({color:1837844,metalness:0,roughness:.25,envMapIntensity:1}):new q_({color:1837844,metalness:0,roughness:.22,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1});Al(r,14729338,.95,2.6);const s=new Hn({color:13212232,metalness:1,roughness:.34,envMapIntensity:1.3,emissive:0}),o=new Hn({color:3802656,roughness:.18,metalness:.05,envMapIntensity:.9}),a=new Hn({map:t,roughness:.46,metalness:0,envMapIntensity:.5}),c=new Zn({map:e,transparent:!0,depthWrite:!1,opacity:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return{gold:n,dark:r,frame:s,lacquer:o,squares:a,blob:c}}function k0(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(24,4,14,.8)"),e.addColorStop(.45,"rgba(24,4,14,.5)"),e.addColorStop(.78,"rgba(24,4,14,.14)"),e.addColorStop(1,"rgba(24,4,14,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new mh(i);return n.colorSpace=Je,n}function V0(i){const t=new dr,e=4,n=8+.5,r=new se(new Ln(n,.34,n),i.lacquer);r.position.y=-.17,t.add(r);const s=new se(new mi(8,8),i.squares);s.rotation.x=-Math.PI/2,s.position.y=.001,t.add(s);const o=e+.16,a=e+.05,c=new Ls;c.moveTo(-o,-o),c.lineTo(o,-o),c.lineTo(o,o),c.lineTo(-o,o),c.closePath();const l=new ya;l.moveTo(-a,-a),l.lineTo(a,-a),l.lineTo(a,a),l.lineTo(-a,a),l.closePath(),c.holes.push(l);const h=new wr(c,{depth:.03,bevelEnabled:!0,bevelSize:.04,bevelThickness:.035,bevelSegments:3,curveSegments:1}),u=new se(h,i.frame);return u.rotation.x=-Math.PI/2,u.position.y=-.03,t.add(u),{group:t,squares:s}}const H0=()=>({loadBoard:async()=>null}),Lh={knight:"models/knight.glb"};function G0(i,t){return{pieces:Ph({low:t,knightUrl:i+Lh.knight}),board:H0()}}const wl=new Map;function W0(i,t){const e=i+"|"+t;let n=wl.get(e);return n||(n=X0(i,t),wl.set(e,n)),n}async function X0(i,t){const e=G0(i,t),[n,r]=await Promise.all([e.pieces.loadPieceSet().catch(s=>(console.warn("[board3d] piece set failed, using the lathe family",s),Ph({low:t,knightUrl:i+Lh.knight}).loadPieceSet())),e.board.loadBoard().catch(s=>(console.warn("[board3d] board model failed, using the procedural board",s),null))]);return{pieceSet:n,boardModel:r}}const q0={he:{board:"לוח שחמט",empty:"ריק",selected:"נבחר",legal:"מהלך חוקי",capture:"הכאה אפשרית",check:"שח",star:"כוכב",hint:"רמז",last:"המהלך האחרון",promo:"בחרו כלי להכתרה"},en:{board:"Chessboard",empty:"empty",selected:"selected",legal:"legal move",capture:"capture",check:"check",star:"star",hint:"hint",last:"last move",promo:"Choose a promotion piece"}},Rl=["p","n","b","r","q","k"],Y0=["w","b"],bo=10,K0=6,Z0=.12,J0=.34,Cl=32,To=(i,t)=>i.type===t.type&&i.color===t.color,Ao=i=>i.color+i.type,$0=(i,t)=>{const e=t,{intents:n}=t,r=t.locale,s=q0[r],o=navigator,a=e.lowTier??Dh({hardwareConcurrency:o.hardwareConcurrency,deviceMemory:o.deviceMemory});let c=t.orientation,l=!0,h={},u=0,f=c==="w"?"a1":"h8",d=!1;const g=new Map,_=new Set,m=new Set,p=new Set;let S=null,y=null,b=null,L=null,C=!1,R=!1;i.classList.add("q3-mount");const D=document.createElement("div");D.className="q3 is-interactive",D.dir="ltr";const nt=document.createElement("div");nt.className="q3-stage",D.append(nt);const v=document.createElement("div");v.className="q3-grid",v.setAttribute("role","grid"),v.setAttribute("aria-label",s.board);const E=[];for(let T=0;T<8;T++){const B=document.createElement("div");B.setAttribute("role","row"),E.push(B)}const G=new Map;for(let T=0;T<8;T++)for(let B=0;B<8;B++){const q="abcdefgh"[B]+String(T+1),j=document.createElement("div");j.setAttribute("role","gridcell");const K=document.createElement("button");K.type="button",K.dataset.sq=q,K.tabIndex=-1,j.append(K),G.set(q,{cell:j,btn:K})}v.append(...E),D.append(v),i.append(D);function V(){for(let T=0;T<8;T++)for(let B=0;B<8;B++)E[T].append(G.get(Ya(B,T,c)).cell)}let z;try{z=new c_({antialias:!0,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0})}catch(T){throw D.remove(),i.classList.remove("q3-mount"),T}const Y=z.domElement;Y.className="q3-canvas",Y.setAttribute("aria-hidden","true"),nt.append(Y),z.setClearColor(0,0),z.toneMapping=Nl,z.toneMappingExposure=1,z.outputColorSpace=Je,z.setPixelRatio(Math.min(devicePixelRatio||1,a?1.5:2));const O=new hh,at=B0(z);O.environment=at,O.environmentIntensity=.9;const W=new Ge(Cl,1,.5,100),pt=e.pieceSet??Ch(a),bt=!e.pieceSet,yt=e.boardModel??null,jt=M0(a?1024:1536,!!yt),Kt=new mh(jt.canvas);Kt.colorSpace=Je,Kt.anisotropy=Math.min(8,z.capabilities.getMaxAnisotropy()),Kt.generateMipmaps=!0,Kt.minFilter=Gn;const $=k0(),rt=z0(a,Kt,$);if(yt){O.add(yt.object),rt.squares.transparent=!0,rt.squares.depthWrite=!1;const T=new se(new mi(8,8),rt.squares);T.rotation.x=-Math.PI/2,T.position.y=.004,T.renderOrder=1,O.add(T)}else O.add(V0(rt).group);const Ct=new Ml(16769728,1.6),gt=new s0(16774374,3803682,.5),Vt=new Ml(12110079,.9);O.add(Ct,gt,Vt);function Ht(){const T=c==="w"?1:-1;Ct.position.set(-4*T,9,6*T),Vt.position.set(3*T,4,-8*T)}const Bt=new Map,Yt=new qt(1,1,1),tt=new qt(.42,.42,.42);for(const T of Y0)for(const B of Rl){const q=pt[B],j=T==="b"&&q.geometryBlack?q.geometryBlack:q.geometry,K=new ol(j,q.materials?.[T]??(T==="w"?rt.gold:rt.dark),bo);K.instanceMatrix.setUsage(Lu);for(let ot=0;ot<bo;ot++)K.setColorAt(ot,Yt);K.count=0,K.frustumCulled=!1,O.add(K),Bt.set(T+B,K)}const w=new mi(1,1);w.rotateX(-Math.PI/2);const lt=new ol(w,rt.blob,40);lt.count=0,lt.frustumCulled=!1,lt.renderOrder=1,O.add(lt);const ut=new $t,st=new ln,ft=new P,Dt=new P,Tt=new ln,A=new ln,x=new ln,F=new ln,Z=new P(0,1,0),et=new P(1,0,0);function J(T,B){const q=T.piece.type,j=pt[q],K=Tl*j.heightScale*T.scale,ot=q==="n"&&T.piece.color==="b"?Math.PI:0;F.setFromAxisAngle(Z,ot);let Ft=0,dt=0;return T.tilt!==0?(Ft=-Bh(j.outline,Math.abs(T.tilt))*K,dt=j.baseR*K*(1-Math.cos(Math.min(Math.abs(T.tilt),Math.PI/2))),Tt.setFromAxisAngle(Z,T.tiltYaw),A.setFromAxisAngle(et,T.tilt),x.setFromAxisAngle(Z,-T.tiltYaw),st.copy(Tt).multiply(A).multiply(x).multiply(F)):st.copy(F),Dt.set(T.x+Math.sin(T.tiltYaw)*dt*Math.sign(T.tilt),T.y+T.hover+Ft,T.z+Math.cos(T.tiltYaw)*dt*Math.sign(T.tilt)),ft.setScalar(K),B.compose(Dt,st,ft)}const Lt=new Map;function mt(){const T=new Map;for(const K of Bt.values())Lt.set(K,[]);let B=0;const q=new Set(h.focus??[]),j=q.size>0;for(const[K,ot]of[...g.entries(),...[..._].map(Ft=>["",Ft])]){if(ot.scale<=.001)continue;const Ft=Ao(ot.piece),dt=T.get(Ft)??0;if(dt>=bo)continue;T.set(Ft,dt+1);const zt=Bt.get(Ft);zt.setMatrixAt(dt,J(ot,ut)),Lt.get(zt)[dt]=K,zt.setColorAt(dt,j&&K&&!q.has(K)?tt:Yt);const _t=ot.y+ot.hover,re=pt[ot.piece.type].baseR*Tl*pt[ot.piece.type].heightScale*ot.scale*2*1.5*(1+_t*1.4)*(1+Math.min(1,Math.abs(ot.tilt))*.9);Dt.set(ot.x,.003,ot.z),ft.set(re,1,re),st.identity(),lt.setMatrixAt(B++,ut.compose(Dt,st,ft))}for(const[K,ot]of Bt)ot.count=T.get(K)??0,ot.visible=ot.count>0,ot.instanceMatrix.needsUpdate=!0,ot.instanceColor&&(ot.instanceColor.needsUpdate=!0),ot.boundingSphere=null;lt.count=B,lt.instanceMatrix.needsUpdate=!0}let Mt=0,Qt=!0;function it(){!Mt&&!C&&!R&&(Mt=requestAnimationFrame(Rt))}function Rt(T){if(Mt=0,!(C||R)){for(const B of[...m]){B.t0<0&&(B.t0=T);const q=T-B.t0-B.delay;if(q<0)continue;const j=B.dur>0?Math.min(1,q/B.dur):1;B.step(j),j>=1&&(m.delete(B),B.end())}Qt&&(ee(),Qt=!1),mt(),z.render(O,W),m.size&&it()}}function Ot(T,B,q=()=>{},j=0){return new Promise(K=>{if(R||C){B(1),q(),K();return}m.add({t0:-1,delay:j,dur:T,step:B,end:()=>{q(),K()}}),it()})}function kt(){for(const T of[...m]){m.delete(T);try{T.step(1)}finally{T.end()}}it()}const Et=()=>!t.reducedMotion;function ee(){jt.draw({marks:h,orientation:c,coordinates:t.coordinates,occupied:T=>g.has(T),focus:d?f:null,over:S?.started&&S.over&&S.over!==S.from?S.over:null}),Kt.needsUpdate=!0}function Gt(){Qt=!0,it()}let ce=0,I=0;const At=[];for(const T of[-4.25,4.25])for(const B of[-4.25,4.25])for(const q of[-.34,0])At.push(new P(T,q,B));const X=new P;function Q(){if(ce<1||I<1)return;W.aspect=ce/I,W.fov=Cl;const T=typeof innerHeight=="number"&&innerHeight>innerWidth,B=ma.degToRad(T?61:60),q=c==="w"?1:-1,j=[...At,new P(-4,1.65,-4*q),new P(4,1.65,-4*q)],K=re=>{W.position.set(0,Math.sin(B)*re,Math.cos(B)*re*q),W.up.set(0,1,0),W.lookAt(0,0,0),W.updateMatrixWorld(!0),W.updateProjectionMatrix();let te=1/0,ve=-1/0,Be=1/0,Un=-1/0;for(const Dr of j)X.copy(Dr).project(W),te=Math.min(te,X.x),ve=Math.max(ve,X.x),Be=Math.min(Be,X.y),Un=Math.max(Un,X.y);return{x0:te,x1:ve,y0:Be,y1:Un}},ot=.965;let Ft=6,dt=80;for(let re=0;re<32;re++){const te=(Ft+dt)/2,ve=K(te);(ve.x1-ve.x0)/2<=ot&&(ve.y1-ve.y0)/2<=ot?dt=te:Ft=te}const zt=K(dt),_t=W.projectionMatrix.elements;_t[8]+=(zt.x0+zt.x1)/2,_t[9]+=(zt.y0+zt.y1)/2,W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),Ht()}let xt=!1;function wt(){if(C)return;const T=i.clientWidth;let B=i.clientHeight;T<1||(!xt&&B<1&&(xt=!0),xt&&(B=T,i.style.minBlockSize=`${T}px`),!(T===ce&&B===I)&&(ce=T,I=B,z.setSize(T,B,!0),Q(),it()))}const ne=new ResizeObserver(()=>wt());ne.observe(i);const xe=()=>{Q(),it()};window.addEventListener("orientationchange",xe);function Ie(T,B){const q=qe(B);return{piece:T,x:q.x,z:q.z,y:0,tilt:0,tiltYaw:0,scale:1,hover:0}}function ie(T,B){const q=qe(B);T.x=q.x,T.z=q.z,T.y=0,T.tilt=0,T.scale=1}function Ae(){y&&(clearTimeout(y.timer),y=null)}function tn(T){const q=Bt.get(Ao(T.piece)).material.clone();q.transparent=!0,q.depthWrite=!1;const j=new se(Bt.get(Ao(T.piece)).geometry,q);return j.matrixAutoUpdate=!1,J(T,j.matrix),j.frustumCulled=!1,O.add(j),p.add(j),{mesh:j,mat:q}}function Qn(T){O.remove(T),p.delete(T),T.material.dispose(),[...Bt.values()].some(B=>B.geometry===T.geometry)||T.geometry.dispose()}function Qi(T,B,q){const j=tn(T),K=Math.random()*Math.PI*2;return Ot(q?320:160,ot=>{q&&(T.tilt=.55*ei(ot),T.tiltYaw=K),J(T,j.mesh.matrix),j.mat.opacity=1-Fh((ot-(q?.3:0))/(q?.7:1))},()=>Qn(j.mesh),B)}function en(T,B){kt(),ye(),Ae(),_.clear();const q=Ja(T),j=!B?.instant&&Et(),K=[];for(const[dt,zt]of g){const _t=q.get(dt);(!_t||!To(_t,zt.piece))&&K.push({sq:dt,p:zt})}for(const{sq:dt}of K)g.delete(dt);const ot=[];for(const[dt,zt]of q)g.has(dt)||ot.push({sq:dt,piece:zt});const Ft=[];if(j)for(let dt=ot.length-1;dt>=0;dt--){const zt=ot[dt];let _t=-1,re=1/0;if(K.forEach((te,ve)=>{if(!To(te.p.piece,zt.piece))return;const Be=Math.hypot($a(te.sq)-$a(zt.sq),ja(te.sq)-ja(zt.sq));Be<re&&(re=Be,_t=ve)}),_t>=0){const te=K.splice(_t,1)[0];Ft.push({from:te.sq,to:zt.sq,p:te.p}),ot.splice(dt,1)}}for(const{p:dt}of K)j&&Qi(dt,0,!1);for(const dt of g.values())dt.tilt=0,dt.y=0;for(const{from:dt,to:zt,p:_t}of Ft)g.set(zt,_t),_t.tilt=0,In(_t,qe(dt),zt,Za(dt,zt),_t.piece.type==="n"?.5:.06);for(const{sq:dt,piece:zt}of ot){const _t=Ie(zt,dt);g.set(dt,_t),j&&(_t.scale=0,Ot(180,re=>{_t.scale=ei(re)}))}for(const[dt,zt]of g)Ft.some(_t=>_t.p===zt)||ie(zt,dt);nn(!0),fn()}function In(T,B,q,j,K,ot=0){const Ft=qe(q);return j<=0?(T.x=Ft.x,T.z=Ft.z,T.y=0,it(),Promise.resolve()):Ot(j,dt=>{const zt=zh(B,Ft,dt,K);T.x=zt.x,T.y=zt.y,T.z=zt.z},()=>{T.x=Ft.x,T.z=Ft.z,T.y=0},ot)}function Cr(T){const B=Ja(T);if(B.size!==g.size)return!1;for(const[q,j]of g){const K=B.get(q);if(!K||!To(K,j.piece))return!1}return!0}function Pr(T){kt(),S&&[T.from,T.to,T.capturedSquare].includes(S.from)&&ye();const B=!!y&&y.from===T.from&&y.to===T.to;Ae(),_.clear();for(const ve of g.values())ve.tilt=0;const q=g.get(T.from);if(!q||q.piece.color!==T.piece.color)return en(T.fenAfter,{instant:!0}),Promise.resolve();const j=Et(),K=[],ot={x:q.x,z:q.z},Ft=B?0:Za(T.from,T.to),dt=T.capturedSquare??(T.captured||T.flags.capture?T.to:null),zt=dt&&dt!==T.from?g.get(dt):void 0;dt&&zt&&g.delete(dt),g.delete(T.from);let _t=null;if(T.rookMove){const ve=g.get(T.rookMove.from);ve&&(g.delete(T.rookMove.from),_t={p:ve,from:T.rookMove.from,to:T.rookMove.to})}let re=null;if(T.flags.promotion?(re=Ie({type:T.flags.promotion,color:T.piece.color},T.to),g.set(T.to,re)):g.set(T.to,q),_t&&g.set(_t.to,_t.p),!Cr(T.fenAfter))return g.clear(),en(T.fenAfter,{instant:!0}),Promise.resolve();if(nn(!0),!j)return ie(q,T.to),_t&&ie(_t.p,_t.to),fn(),Promise.resolve();const te=T.piece.type==="n"?.5:.06;if(re){_.add(q);const ve=re;ve.scale=0,K.push(In(q,ot,T.to,Ft,te).then(()=>(_.delete(q),Promise.all([Ot(300,Be=>{ve.scale=Be<.7?.6+(1.08-.6)*ei(Be/.7):1.08-.08*((Be-.7)/.3)},()=>{ve.scale=1}),vi(T.to)]).then(()=>{}))))}else K.push(In(q,ot,T.to,Ft,te));return zt&&K.push(Qi(zt,Math.round(Ft*.55),!0)),_t&&K.push(In(_t.p,qe(_t.from),_t.to,Math.max(160,Ft),.32,60)),fn(),Promise.all(K).then(()=>{})}function vi(T){const B=qe(T),q=new Zn({color:15914378,transparent:!0,opacity:0,blending:wo,depthWrite:!1}),j=new Ha(.36,.03,8,40);j.rotateX(Math.PI/2);const K=new se(j,q);return K.position.set(B.x,.05,B.z),O.add(K),p.add(K),Ot(420,ot=>{K.position.y=.05+1.3*ei(ot),K.scale.setScalar(1-.45*ot),q.opacity=Math.sin(Math.PI*ot)*.9},()=>Qn(K))}let ti=null;function nn(T=!1){const B=h.selected&&g.has(h.selected)&&!S?.started?h.selected:null;if(B===ti&&!T)return;const q=ti?g.get(ti):void 0;ti=B;const j=B?g.get(B):void 0;for(const ot of g.values())ot!==j&&ot!==q&&(ot.hover=0);const K=(ot,Ft)=>{if(!ot||ot.hover===Ft)return;if(!Et()||T){ot.hover=Ft,it();return}const dt=ot.hover;Ot(90,zt=>{ot.hover=dt+(Ft-dt)*ei(zt)})};K(q,0),K(j,Z0)}function fn(){const T=h,B=new Set(T.targets??[]),q=new Set(T.stars??[]),j=new Set([T.hint?.from,T.hint?.to].filter(Pl));for(const[K,ot]of G){const Ft=g.get(K),dt=T.selected===K,zt=B.has(K),_t=zt&&!!Ft,re=!!T.lastMove&&(T.lastMove.from===K||T.lastMove.to===K),te=[K,Ft?Ka(Ft.piece,r):s.empty];dt&&te.push(s.selected),zt&&te.push(_t?s.capture:s.legal),T.check===K&&te.push(s.check),q.has(K)&&te.push(s.star),j.has(K)&&te.push(s.hint),re&&te.push(s.last),ot.btn.setAttribute("aria-label",te.join(", ")),ot.cell.setAttribute("aria-selected",dt?"true":"false"),ot.btn.tabIndex=K===f?0:-1,l?ot.btn.removeAttribute("aria-disabled"):ot.btn.setAttribute("aria-disabled","true")}Gt()}function Lr(T){h={...T},u++,nn(),fn()}function Ir(T){f=T;for(const[B,q]of G)q.btn.tabIndex=B===T?0:-1;Gt()}function Fs(T){const B=T.target.closest("button[data-sq]");if(T.key==="Escape"){S&&ye(),n.cancel(),T.preventDefault();return}if(!B)return;const q=Uh(B.dataset.sq,c);let j=q.col,K=q.row;switch(T.key){case"ArrowLeft":j--;break;case"ArrowRight":j++;break;case"ArrowUp":K--;break;case"ArrowDown":K++;break;case"Home":j=0;break;case"End":j=7;break;case"PageUp":K=0;break;case"PageDown":K=7;break;default:return}T.preventDefault(),j=Math.max(0,Math.min(7,j)),K=Math.max(0,Math.min(7,K));const ot=Ya(j,K,c);d=!0,Ir(ot),G.get(ot)?.btn.focus()}function Bs(T){const B=T.target.closest("button[data-sq]");if(!B||!l)return;const q=B.dataset.sq;if(b&&b.sq===q&&performance.now()-b.at<600){b=null;return}f=q,n.select(q)}function M(T){const B=T.target.closest("button[data-sq]");if(!B)return;let q=!0;try{q=B.matches(":focus-visible")}catch{}d=q,B.dataset.sq!==f?Ir(B.dataset.sq):Gt()}function U(T){T.relatedTarget instanceof Node&&v.contains(T.relatedTarget)||(d=!1,Gt())}v.addEventListener("keydown",Fs),v.addEventListener("click",Bs),v.addEventListener("focusin",M),v.addEventListener("focusout",U);const k=new x0,H=new ht;function N(T,B){const q=Y.getBoundingClientRect();return H.set((T-q.left)/q.width*2-1,-((B-q.top)/q.height)*2+1),k.setFromCamera(H,W),k.ray}function ct(T,B){N(T,B);const q=[...Bt.values()].filter(K=>K.count>0),j=[];for(const K of k.intersectObjects(q,!1)){const ot=Lt.get(K.object)?.[K.instanceId??-1];ot&&!j.includes(ot)&&j.push(ot)}return j}function St(T,B,q=!1){let j=ct(T,B);const K=N(T,B),ot=Qa(K.origin,K.direction,0),Ft=ot?Ur(ot.x,ot.z):null,dt=new Set(h.targets??[]);if(dt.size){const zt=j.find(_t=>dt.has(_t));if(zt)return zt;if(Ft&&dt.has(Ft))return Ft}if(q&&!j.length&&(!Ft||!g.has(Ft)))for(let _t=0;_t<8&&!j.length;_t++)j=ct(T+9*Math.cos(_t*Math.PI/4),B+9*Math.sin(_t*Math.PI/4));return j[0]??Ft}function Pt(T){return T.touch?Y.getBoundingClientRect().width/9*.6:0}function It(T,B){const q=N(T,B);return Qa(q.origin,q.direction,0)}function Wt(T){if(!l||L||T.button>0)return;const B=St(T.clientX,T.clientY,T.pointerType!=="mouse");B&&(S&&ye(),S={pointerId:T.pointerId,from:B,startX:T.clientX,startY:T.clientY,started:!1,touch:T.pointerType!=="mouse",over:null,lastX:T.clientX,lastY:T.clientY},T.pointerType==="mouse"&&T.preventDefault(),f=B)}function Xt(T,B){if(!S?.started)return;const q=g.get(S.from),j=It(T,B-Pt(S));q&&j&&(q.x=Math.max(-4.4,Math.min(4.4,j.x)),q.z=Math.max(-4.4,Math.min(4.4,j.z)),q.y=Et()?J0:0);const K=j?Ur(j.x,j.z):null;K!==S.over&&(S.over=K,Gt()),it()}function Ut(T){if(!(!S||T.pointerId!==S.pointerId)){if(S.lastX=T.clientX,S.lastY=T.clientY,!S.started){if(Math.hypot(T.clientX-S.startX,T.clientY-S.startY)<K0)return;const B=g.get(S.from);if(!B)return;if(h.selected!==S.from){const q=u;if(n.select(S.from),u!==q&&h.selected!==S.from){S=null;return}}kt(),S.started=!0,B.hover=0;try{Y.setPointerCapture(T.pointerId)}catch{}D.classList.add("is-dragging")}Xt(T.clientX,T.clientY)}}function le(T){if(!S||T.pointerId!==S.pointerId)return;const B=S;if(!B.started){if(S=null,!l)return;const dt=St(T.clientX,T.clientY,B.touch)??B.from;b={sq:dt,at:performance.now()},f=dt,n.select(dt);return}const q=It(T.clientX,T.clientY-Pt(B)),j=q?Ur(q.x,q.z):null,K=g.get(B.from);if(ge(B),S=null,b={sq:j??B.from,at:performance.now()},!K)return;if(!j){ue(K,B.from),n.cancel();return}if(j===B.from){ue(K,B.from),nn();return}const ot=qe(j);K.x=ot.x,K.z=ot.z,K.y=0,it();const Ft=window.setTimeout(()=>{if(!y||L)return;const dt=y;y=null;const zt=g.get(dt.from);zt&&ue(zt,dt.from)},0);y={from:B.from,to:j,timer:Ft},n.drop(B.from,j)}function ue(T,B){const q={x:T.x,z:T.z},j=T.y,K=qe(B);if(!Et()){T.x=K.x,T.z=K.z,T.y=0,it(),nn();return}Ot(180,ot=>{const Ft=ei(ot);T.x=q.x+(K.x-q.x)*Ft,T.z=q.z+(K.z-q.z)*Ft,T.y=j*(1-Ft)},()=>{T.x=K.x,T.z=K.z,T.y=0,nn()})}function ge(T){D.classList.remove("is-dragging");try{Y.releasePointerCapture(T.pointerId)}catch{}T.over=null,Gt()}function ye(){if(!S)return;const T=S;if(S=null,T.started){ge(T);const B=g.get(T.from);B&&ie(B,T.from),it()}}function oe(T){S&&T.pointerId===S.pointerId&&ye()}const Nt=T=>{S?.started&&T.preventDefault()};Y.addEventListener("pointerdown",Wt),Y.addEventListener("pointermove",Ut),Y.addEventListener("pointerup",le),Y.addEventListener("pointercancel",oe),Y.addEventListener("lostpointercapture",oe),Y.addEventListener("contextmenu",Nt);const be=T=>{T.preventDefault(),!(R||C)&&(R=!0,kt(),e.onFallback?.("context-lost"))};Y.addEventListener("webglcontextlost",be);const ae=["q","r","b","n"];function we(T){if(!L)return;const B=L;if(L=null,document.removeEventListener("pointerdown",B.onDoc,!0),B.root.remove(),G.get(B.square)?.btn.focus({preventScroll:!0}),T===null&&y){const q=y;Ae();const j=g.get(q.from);j&&ue(j,q.from)}B.resolve(T)}function Dn(T,B){return L&&we(null),ye(),new Promise(q=>{const j=document.createElement("div");j.className="q3-promo",j.setAttribute("role","dialog"),j.setAttribute("aria-modal","true"),j.setAttribute("aria-label",s.promo);const K=document.createElement("div");K.className="q3-promo-scrim",K.addEventListener("pointerdown",_t=>{_t.preventDefault(),we(null)});const ot=document.createElement("div");ot.className="q3-promo-bar";const Ft=qe(T);X.set(Ft.x,.6,Ft.z).project(W),ot.style.top=`${Math.round(Math.max(18,Math.min(82,(1-(X.y+1)/2)*100)))}%`;const dt=ae.map(_t=>{const re=document.createElement("button");return re.type="button",re.className="q3-promo-btn",re.innerHTML=Nh({type:_t,color:B}),re.setAttribute("aria-label",Ka({type:_t,color:B},r)),re.addEventListener("click",()=>we(_t)),re});ot.append(...dt),ot.addEventListener("keydown",_t=>{const re=dt.indexOf(_t.target);if(_t.key==="Escape"){_t.preventDefault(),_t.stopPropagation(),we(null);return}let te=-1;if(_t.key==="ArrowRight"||_t.key==="ArrowDown")te=re+1;else if(_t.key==="ArrowLeft"||_t.key==="ArrowUp")te=re-1;else if(_t.key==="Tab")te=_t.shiftKey?re-1:re+1;else if(_t.key==="Home")te=0;else if(_t.key==="End")te=dt.length-1;else return;_t.preventDefault(),_t.stopPropagation(),dt[(te+dt.length)%dt.length].focus()}),j.append(K,ot),D.append(j);const zt=_t=>{j.contains(_t.target)||we(null)};document.addEventListener("pointerdown",zt,!0),L={root:j,resolve:q,square:T,onDoc:zt},dt[0].focus({preventScroll:!0})})}function Fe(T,B){const q=rt.frame.emissive;Ot(B*T,j=>{const K=Math.sin(Math.PI*(j*T%1));q.setRGB(.32*K,.24*K,.1*K)},()=>q.setRGB(0,0,0))}function tr(T){const B=g.get(T);if(!B||B.piece.type!=="k")return;const q=qe(T);let j=c==="w"?1:-1,K=0;const ot=h.lastMove?.to;if(ot&&ot!==T){const _t=qe(ot);j=q.x-_t.x,K=q.z-_t.z}const Ft=Math.hypot(j,K)||1;let dt={s:-1/0,dx:j,dz:K};for(let _t=0;_t<8;_t++){const re=_t/8*Math.PI*2,te=Math.round(Math.sin(re)),ve=Math.round(Math.cos(re));let Be=(te*j+ve*K)/(Ft*Math.hypot(te,ve));for(const Un of[1,2]){const Dr=Ur(q.x+te*Un,q.z+ve*Un);Dr?g.has(Dr)&&(Be-=Un===1?6:2):Be-=Un===1?10:4}Be>dt.s&&(dt={s:Be,dx:te,dz:ve})}B.tiltYaw=Math.atan2(dt.dx,dt.dz);const zt=Oh(pt.k.outline);if(!Et()){B.tilt=zt,it();return}Ot(1100,_t=>{B.tilt=zt*kh(_t)})}function Me(T,B){const q=qe(T),j=new Zn({color:15256714,transparent:!0,opacity:.9,depthWrite:!1}),K=new ka(.4,.46,48);K.rotateX(-Math.PI/2);const ot=new se(K,j);ot.position.set(q.x,.01,q.z),ot.renderOrder=2,O.add(ot),p.add(ot),Ot(B?1600:650,Ft=>{const dt=B?Ft*2%1:Ft;ot.scale.setScalar(.6+(B?1.3:.9)*ei(dt)),j.opacity=.9*(1-dt)},()=>Qn(ot))}function dn(T){if(C)return;const B=T==="checkmate"||T==="win";if(B&&h.check&&tr(h.check),!Et())return;const q=B||T==="lesson-done";T!=="lesson-step"&&Fe(q?2:1,q?1300:1100);const j=B?null:h.lastMove?.to??null;j&&T!=="draw"&&Me(j,q)}function er(T){T!==c&&(kt(),ye(),c=T,V(),Q(),fn())}function He(T){l=T,D.classList.toggle("is-interactive",T),T||(ye(),L&&we(null)),fn()}function nr(){if(!C){L&&we(null),kt(),ye(),Ae(),C=!0,Mt&&cancelAnimationFrame(Mt),Mt=0,ne.disconnect(),window.removeEventListener("orientationchange",xe),Y.removeEventListener("webglcontextlost",be);for(const T of[...p])Qn(T);for(const T of Bt.values())T.dispose();if(lt.dispose(),bt)for(const T of Rl)pt[T].geometry.dispose(),pt[T].geometryBlack?.dispose();yt&&O.remove(yt.object),w.dispose(),O.traverse(T=>{const B=T;B.isMesh&&!B.isInstancedMesh&&B.geometry.dispose()});for(const T of Object.values(rt))T.dispose();Kt.dispose(),$.dispose(),at.dispose(),z.dispose();try{z.forceContextLoss()}catch{}D.remove(),i.classList.remove("q3-mount"),xt&&(i.style.minBlockSize="")}}return V(),wt(),fn(),Object.defineProperty(D,"q3ScreenPoint",{value:(T,B=.02)=>{const q=qe(T),j=Y.getBoundingClientRect();return X.set(q.x,B,q.z).project(W),{x:j.left+(X.x+1)/2*j.width,y:j.top+(1-X.y)/2*j.height}}}),{setPosition:en,playMove:Pr,setMarks:Lr,setOrientation:er,choosePromotion:Dn,celebrate:dn,setInteractive:He,destroy:nr,get element(){return D}}},uv=Object.freeze(Object.defineProperty({__proto__:null,createBoard3D:$0,preloadAssets:W0},Symbol.toStringTag,{value:"Module"}));export{da as $,ev as A,Xe as B,qt as C,Ml as D,ph as E,sv as F,nv as G,iv as H,ol as I,dr as J,Ge as K,Rr as L,q_ as M,Nr as N,Ee as O,c0 as P,ln as Q,zo as R,Je as S,ov as T,ma as U,ht as V,rh as W,dh as X,rv as Y,h_ as Z,xs as _,cv as a,uh as a0,De as a1,ws as a2,As as a3,Us as a4,fe as a5,Kn as a6,Ds as a7,jn as a8,Pn as a9,yu as aa,ac as ab,uv as ac,$n as b,av as c,$t as d,P as e,il as f,lv as g,Q0 as h,Gn as i,zs as j,_u as k,an as l,We as m,ko as n,fi as o,p_ as p,_i as q,d_ as r,Hn as s,wn as t,Zn as u,pe as v,Ue as w,tv as x,se as y,hv as z};
