import{j as e}from"./index-CC8OgtCh.js";import{a as r,c as l}from"./index-Bvcen68L.js";import"./iframe-DGk8Bnoc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiYErFD9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,h={title:"Example/Rove Icons",component:r,parameters:{layout:"centered",docs:{codePanel:!0}},tags:["autodocs"],argTypes:{},args:{onClick:t()}};new Array(15).fill(0).map((o,c)=>({key:"Chrome"+c,label:"Chrome "+c,icon:e.jsx(l,{})}));const n={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",background:"#ccc",padding:10},children:e.jsx(r,{lib:"ai",name:"AiFillAudio"})})}},i={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",background:"#ccc",padding:10},children:e.jsx(r,{lib:"ai",name:"AiFillAudio",color:"red"})})}},a={args:{lib:"ai",name:"AiFillCloseSquare"},render:function(){return e.jsx("div",{style:{width:"calc(100vw - 100px)",height:"80vh",background:"#ccc",padding:10},children:e.jsx(r,{lib:"ai",name:"AiFillAudio",width:30,height:30})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      background: "#ccc",
      padding: 10
    }}>
                <RoveIcon lib="ai" name="AiFillAudio" />
            </div>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      background: "#ccc",
      padding: 10
    }}>
                <RoveIcon lib="ai" name="AiFillAudio" color="red" />
            </div>;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    lib: "ai",
    name: "AiFillCloseSquare"
  },
  render: function Example() {
    return <div style={{
      width: "calc(100vw - 100px)",
      height: "80vh",
      background: "#ccc",
      padding: 10
    }}>
                <RoveIcon lib="ai" name="AiFillAudio" width={30} height={30} />
            </div>;
  }
}`,...a.parameters?.docs?.source}}};const g=["RoveIconBase","RoveIconWithColor","RoveIconWithSize"];export{n as RoveIconBase,i as RoveIconWithColor,a as RoveIconWithSize,g as __namedExportsOrder,h as default};
