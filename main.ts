import{mkdirSync,readdirSync,readFileSync as F,writeFileSync as W}from'fs'
let E=process.env,I=E.MAKEFUN_INPUT_DIR??'/input',O=E.MAKEFUN_OUTPUT_DIR??'/output',T=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`,
f='a+b a-b Math.imul(a,b) a/b a%b (a>>>0)/(b>>>0) (a>>>0)%(b>>>0) -b a&b a|b a^b ~b a<<b a>>b a>>>b 0 a==b a<b a>>>0<b>>>0'.split` `.map(e=>eval('(a,b)=>'+e)),B=Buffer.alloc(65536)
for(let d of readdirSync(I).sort()){let P=I+'/'+d+'/',p=F(P+'program.bin'),q=F(P+'input.bin'),D=new Int32Array(256),m=new Int32Array(256),C=[],l=0,i=0,c=0,s=0,j=0,o,k,u,a,g,t,r=(()=>{for(;;){if(s++>=1e6)return 10
if((o=p[c])==null)return 9
if(!((k=T.charCodeAt(o)-33)+1))return 5
if((c+=1+(k>>4))>p.length)return 9
if(j<(u=k>>2&3))return 2
if(j-u+(k&3)>256)return 3
if(g=f[o-16]){a=D[j-1];if(!a&&o>18&&o<23)return 4;if(k&8)j--;D[j-1]=g(D[j-1],a)}else switch(o){case 0:return 0
case 1:D[j++]=p[c-1]<<24>>24;break
case 2:D[j++]=p.readInt32LE(c-4);break
case 3:j--;break
case 4:case 6:D[j++]=D[j-o/2];break
case 5:D.set([D[j-1],D[j-2]],j-2);break
case 7:D.set([D[j-2],D[j-1],D[j-3]],j-3);break
case 48:case 49:case 50:if(o<49||!D[--j]^o>49)c+=p.readInt16LE(c-2);break
case 51:if(C.push(c)>64)return 7;c=p.readUInt16LE(c-2);break
case 52:if(!(c=C.pop()))return 8;break
case 64:case 65:a=D[--j];if(a&-256)return 6;o>64?m[a]=D[--j]:D[j++]=m[a];break
case 80:case 81:a=D[--j];t=Buffer.from(o>80?[a]:''+a);if(l+t.length>65536)return 11;l+=t.copy(B,l);break
case 82:D[j++]=q[i++]??-1;break
case 83:return D[--j]&255}}})(),Q=O+'/'+d
mkdirSync(Q,{recursive:true});W(Q+'/stdout.bin',B.subarray(0,l));W(Q+'/exit.txt',r+'')}
