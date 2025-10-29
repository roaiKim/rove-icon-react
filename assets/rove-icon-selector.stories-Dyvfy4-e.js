import{j as e}from"./index-CC8OgtCh.js";import{r as i}from"./iframe-DGk8Bnoc.js";import{R as r,a as s,b as S,c as g}from"./index-Bvcen68L.js";import"./index-BiYErFD9.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Example/Rove Icon Selector",component:r,parameters:{layout:"centered",docs:{codePanel:!0}},tags:["autodocs"],argTypes:{},args:{showColor:!0,showSize:!0}};new Array(15).fill(0).map((o,n)=>({key:"Chrome"+n,label:"Chrome "+n,icon:e.jsx(g,{})}));const l={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh"},children:e.jsx(r,{showColor:!0,showSize:!0})})}},c={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsxs("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:[e.jsx(r,{isPopup:!0,onConfirm:a=>{t(a)}}),e.jsx("div",{style:{marginLeft:20}}),e.jsx(s,{...n})]})}},d={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsxs("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:[e.jsx(r,{isPopup:!0,onConfirm:a=>{t(a)},children:e.jsx("button",{className:"rove-button primary",children:"with children Popup"})}),e.jsx("div",{style:{marginLeft:20}}),e.jsx(s,{...n})]})}},h={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(r,{MIT:!0,onConfirm:a=>{t(a)}})})}},u={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(r,{exclude:["ai","bi","bs"],onConfirm:a=>{t(a)}})})}},m={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(r,{include:["ai","bi","bs"],onConfirm:a=>{t(a)}})})}},v={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(S.Provider,{value:{type:"ch"},children:e.jsxs(e.Fragment,{children:[e.jsx(r,{isPopup:!0,onConfirm:a=>{t(a)}}),e.jsx("div",{style:{marginLeft:20}}),e.jsx(s,{...n})]})})})}},p={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(S.Provider,{value:{type:"en",language:{"rove-modal-title":"my modal title"}},children:e.jsxs(e.Fragment,{children:[e.jsx(r,{isPopup:!0,onConfirm:a=>{t(a)}}),e.jsx("div",{style:{marginLeft:20}}),e.jsx(s,{...n})]})})})}},x={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){const[n,t]=i.useState({lib:"ai",name:"",width:24,height:24,color:"#000000"});return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",display:"flex"},children:e.jsx(S.Provider,{value:{language:{"rove-modal-title":"アイコンを選択","rove-modal-select-name":"選択","rove-selector-width":"幅","rove-selector-height":"高さ","rove-selector-color":"色","rove-selector-copyname":"名前をコピー","rove-selector-copy":"コピー","rove-selector-ok":"確定","rove-search-placeholder":"アイコン名を検索","rove-search-button":"検索"}},children:e.jsxs(e.Fragment,{children:[e.jsx(r,{isPopup:!0,onConfirm:a=>{t(a)},children:e.jsx("button",{className:"rove-button primary",children:"選択 アイコンです"})}),e.jsx("div",{style:{marginLeft:20}}),e.jsx(s,{...n})]})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh"
    }}>
                <RoveIconSelector showColor showSize />
            </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveIconSelector isPopup onConfirm={state => {
        setState(state);
      }}></RoveIconSelector>
                <div style={{
        marginLeft: 20
      }}></div>
                <RoveIcon {...state} />
            </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveIconSelector isPopup onConfirm={state => {
        setState(state);
      }}>
                    <button className="rove-button primary">with children Popup</button>
                </RoveIconSelector>
                <div style={{
        marginLeft: 20
      }}></div>
                <RoveIcon {...state} />
            </div>;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveIconSelector MIT onConfirm={state => {
        setState(state);
      }}></RoveIconSelector>
            </div>;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveIconSelector exclude={["ai", "bi", "bs"]} onConfirm={state => {
        setState(state);
      }}></RoveIconSelector>
            </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveIconSelector include={["ai", "bi", "bs"]} onConfirm={state => {
        setState(state);
      }}></RoveIconSelector>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveContext.Provider value={{
        type: "ch"
      }}>
                    <>
                        <RoveIconSelector isPopup onConfirm={state => {
            setState(state);
          }}></RoveIconSelector>
                        <div style={{
            marginLeft: 20
          }}></div>
                        <RoveIcon {...state} />
                    </>
                </RoveContext.Provider>
            </div>;
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveContext.Provider value={{
        type: "en",
        language: {
          "rove-modal-title": "my modal title"
        }
      }}>
                    <>
                        <RoveIconSelector isPopup onConfirm={state => {
            setState(state);
          }}></RoveIconSelector>
                        <div style={{
            marginLeft: 20
          }}></div>
                        <RoveIcon {...state} />
                    </>
                </RoveContext.Provider>
            </div>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    const [state, setState] = useState<IconSelectorState>({
      lib: "ai",
      name: "",
      width: 24,
      height: 24,
      color: "#000000"
    });
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      display: "flex"
    }}>
                <RoveContext.Provider value={{
        language: {
          "rove-modal-title": "アイコンを選択",
          "rove-modal-select-name": "選択",
          "rove-selector-width": "幅",
          "rove-selector-height": "高さ",
          "rove-selector-color": "色",
          "rove-selector-copyname": "名前をコピー",
          "rove-selector-copy": "コピー",
          "rove-selector-ok": "確定",
          "rove-search-placeholder": "アイコン名を検索",
          "rove-search-button": "検索"
        }
      }}>
                    <>
                        <RoveIconSelector isPopup onConfirm={state => {
            setState(state);
          }}>
                            <button className="rove-button primary">選択 アイコンです</button>
                        </RoveIconSelector>
                        <div style={{
            marginLeft: 20
          }}></div>
                        <RoveIcon {...state} />
                    </>
                </RoveContext.Provider>
            </div>;
  }
}`,...x.parameters?.docs?.source}}};const j=["Base","WithModal","WithChildren","MITIcon","ExcludeIcon","IncludeIcon","languageCH","ReplaceLanguage","OtherLanguage"];export{l as Base,u as ExcludeIcon,m as IncludeIcon,h as MITIcon,x as OtherLanguage,p as ReplaceLanguage,d as WithChildren,c as WithModal,j as __namedExportsOrder,I as default,v as languageCH};
