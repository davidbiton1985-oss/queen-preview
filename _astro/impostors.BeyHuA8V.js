import{T as A,a as F,L as z,m as B,n as b,D as G,e as _,P as L,I as O,j as h,d as E,V as w,Q as R,M as T,h as U,i as V}from"./stage.CWNDWgjI.js";import"./Home.astro_astro_type_script_index_0_lang.B5IuX7yF.js";import"./pointer.B-ItknWI.js";const W=16,$=4,N=4,I=448/320,P=.7685,j=.105;async function H(M,a,c,t,l,D){if(!a.length)return;const r=await new A().loadAsync(`${M}trees/tree_a${t?"_m":""}.webp`);r.colorSpace=F,r.anisotropy=t?2:8,r.generateMipmaps=!0,r.minFilter=z,r.wrapS=r.wrapT=B;const i=c.fog,s=new b({uniforms:{map:{value:r},uS:{value:l},uGain:{value:1.3},fogColor:{value:i?i.color:new _(0)},fogDensity:{value:i?i.density:0}},side:G,transparent:t,alphaToCoverage:!t,depthWrite:!t,premultipliedAlpha:!1,vertexShader:`
      attribute vec2 aVar; // x = היסט מבט (בפריימים), y = מתיחת רוחב — כדי ששכנים לא יהיו תאומים
      uniform float uS; varying vec2 vUvA; varying vec2 vUvB; varying float vBlend; varying float vFogDepth;
      const float N = ${W}.0; const float COLS = ${$}.0; const float ROWS = ${N}.0;
      vec2 cell(float i, vec2 uv) { float c = mod(i, COLS); float r = floor(i / COLS); return vec2((c + uv.x) / COLS, 1.0 - (r + 1.0 - uv.y) / ROWS); }
      void main() {
        vec3 ip = (modelMatrix * instanceMatrix * vec4(0., 0., 0., 1.)).xyz;
        float sc = length((instanceMatrix * vec4(0., 1., 0., 0.)).xyz);
        vec3 toCam = cameraPosition - ip;
        vec3 right = normalize(vec3(toCam.z, 0., -toCam.x));
        vec3 wp = ip + right * position.x * sc * aVar.y * ${I.toFixed(4)} + vec3(0., 1., 0.) * (position.y - ${j.toFixed(3)}) * sc;
        float a = atan(toCam.x * uS, toCam.z);                       // LTR: הסצנה משתקפת → הזווית משתקפת
        float f = mod(a / 6.2831853 * N + aVar.x + N, N);
        float i0 = floor(f), i1 = mod(i0 + 1., N);
        vBlend = smoothstep(0.3, 0.7, f - i0);                       // כמעט snap — גזע כפול נראה רק בחלון צר
        vec2 uv = vec2(uS < 0. ? 0.5 - position.x : position.x + 0.5, position.y);
        // שוליים של חצי טקסל בתוך כל פריים — בלי דליפה מהפריים השכן ב-mip
        uv = clamp(uv, vec2(0.004), vec2(0.996));
        vUvA = cell(i0, uv); vUvB = cell(i1, uv);
        vec4 mv = viewMatrix * vec4(wp, 1.); vFogDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D map; uniform float uGain; uniform vec3 fogColor; uniform float fogDensity;
      varying vec2 vUvA; varying vec2 vUvB; varying float vBlend; varying float vFogDepth;
      void main() {
        vec4 ca = texture2D(map, vUvA), cb = texture2D(map, vUvB);
        vec4 c = mix(ca, cb, vBlend);
        ${t?"float al = smoothstep(0.08, 0.75, c.a); if (al < 0.01) discard;      // מובייל: קצה רך, מעורבב":"float al = clamp((c.a - 0.5) / max(fwidth(c.a), 1e-4) + 0.5, 0., 1.); if (al < 0.02) discard;   // דסקטופ: קצה של פיקסל אחד, MSAA מחליק"}
        // האטלס הוא straight-alpha עם RGB מורחב מתחת לשקוף — אסור לחלק באלפא (זה הבהיר כל פיקסל-קצה עד פי 3 = נצנוץ סביב הצללית)
        vec3 col = c.rgb * uGain;
        gl_FragColor = vec4(col, al);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        float ff = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, pow(fogColor, vec3(1. / 2.2)) * 0.9, ff * 0.0);
      }`});s.fragmentShader=s.fragmentShader.replace("vec3 col = c.rgb * uGain;",`vec3 col = c.rgb * uGain;
        col = mix(col, fogColor, 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth));`).replace(/float ff =[\s\S]*?ff \* 0\.0\);/,""),t&&(a=[...a].sort((e,o)=>e.z-o.z||e.x*l-o.x*l));const u=new L(1,1).translate(0,.5,0),v=new Float32Array(a.length*2);a.forEach((e,o)=>{const S=Math.sin(e.x*12.9898+e.z*78.233)*43758.5453,C=S-Math.floor(S);v[o*2]=Math.round(C*4)-2,v[o*2+1]=.92+C*7.3%1*.16}),u.setAttribute("aVar",new O(v,2));const n=new h(u,s,a.length),f=new E,p=new R,m=new w,g=new w;a.forEach((e,o)=>n.setMatrixAt(o,f.compose(m.set(e.x,e.y,e.z),p,g.setScalar(e.h/P)))),n.frustumCulled=!1,n.castShadow=!1,n.receiveShadow=!1,c.add(n);const d=new T({colorWrite:!1,depthWrite:!1}),x=new h(new U(1,1),d,a.length),y=new h(new V(1,1,1,5),d,a.length);a.forEach((e,o)=>{x.setMatrixAt(o,f.compose(m.set(e.x,e.y+e.h*.68,e.z),p,g.set(e.h*.55,e.h*.3,e.h*.55))),y.setMatrixAt(o,f.compose(m.set(e.x,e.y+e.h*.22,e.z),p,g.set(e.h*.035,e.h*.44,e.h*.035)))});for(const e of[x,y])e.castShadow=!0,e.frustumCulled=!1,e.renderOrder=-1,c.add(e);D()}export{H as loadTrees};
//# sourceMappingURL=impostors.BeyHuA8V.js.map
