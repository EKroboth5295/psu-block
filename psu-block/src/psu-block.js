import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    boxText1: { type: String },
    boxText2: { type: String },
    linkURLImg: { type: String },
    linkURLStr: { type: String },
    stateOne: { type: Boolean, reflect: true},
    stateTwo: { type: Boolean, reflect: true},
    stateThree: { type: Boolean, reflect: true},
    stateFour: { type: Boolean, reflect: true},
    stateFive: { type: Boolean, reflect: true},
    multiFields:{ type: Boolean, reflect: true }, 
  }

  static get styles() {
    return css`
    :host {
      display: block;
      padding-left: 158px;
      padding-top: 20px;
    }

    :host([stateOne]) .block {
      font-family: "Roboto", sans-serif;
      width: 369.719px;
      height: 315.750px;
      background-color: #1e407c;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    }

    :host([stateOne]) .content{
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
    }


    :host([stateTwo]) .block {
      font-family: "Roboto", sans-serif;
      width: 369.719px;
      height: 315.750px;
      background-color: #ffffff;
      color: #001e44;
      font-size: 32px;
      text-align: left;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    :host([stateTwo]) b {
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      display: block;
    }
    
    :host([stateTwo]) p {
      font-size: 20px;
      font-weight: 400px;
    }

    :host([stateTwo]) .content {
      padding-top: 1%;
      padding-bottom: 5%;
      padding-left: 10%;
      padding-right: 10%;
    } 


    :host([stateThree]) .block {
      font-family: "Roboto", sans-serif;
      width: 369.719px;
      height: 315.750px;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
      background: linear-gradient(180deg, #1e407c 0%, #001e44 65%, #001e44 100%);
    }

    :host([stateThree]) .content {
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;

    }

    :host([stateFour]) .block {
      font-family: "Roboto", sans-serif;
      width: 369.719px;
      height: 315.750px;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      position: relative;
      background-color: #00032180;
    } 

    :host([stateFour]) .content {
      padding-top: 10%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
    } 

    :host([stateFour]) .card-link {
      text-decoration-line: none;
      color: #ffffff;
    }

    :host([stateFour]) svg {
      padding-bottom: 25px;
      padding-left: 300px;
    }

    :host(:hover) svg {
      padding-right: 320px;
      transform: scale(1.35);
      transition: transform 0.2s ease-in-out;
    }

    :host([stateFive]) .block {
      font-family: "Roboto", sans-serif;
      width: 369.719px;
      height: 315.750px;
      background-color: #001e44;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      text-align: left;
    }

    :host([stateFive]) .content {
      padding-top: 15%;
      padding-bottom: 15%;
      padding-left: 10%;
      padding-right: 10%;
    }
  `;
  }

  constructor() {
    super();
    this.header = 'PSU Block';
    this.boxText1 = this.boxText1 || "default-text";
    this.boxText2 = this.boxText2 || "default-text-2";
    this.linkURLImg = this.linkURLImg || "";
    this.linkURLStr = this.linkURLStr || "";
  }

  render() {
    return html`
      ${this.linkURLImg ? html`
        <div class="block" style='background-image: url("${this.linkURLImg}");'>
          <div class="content">
            <a class="card-link" href=${this.linkURLStr} target="${this.linkURLStr}">
              <h3> ${this.boxText1} </h3>
            </a>
            <p> ${this.multiFields ? html`<b></b> <p> ${this.boxText2} </p>` : html` `}</p>
            <div class="link-image"> ${this.linkURLStr ? html` 
              <a href=${this.linkURLStr}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                  <mask id="mask0_173_1032" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"></rect>
                  </mask>
                  <g mask="url(#mask0_173_1032)">
                    <path d="M4.22222 22C3.61111 22 3.08796 21.7824 2.65278 21.3472C2.21759 20.912 2 20.3889 2 19.7778V4.22222C2 
                      3.61111 2.21759 3.08796 2.65278 2.65278C3.08796 2.21759 3.61111 2 4.22222 2H10.8889C11.2037 2 11.4676 
                      2.10648 11.6806 2.31944C11.8935 2.53241 12 2.7963 12 3.11111C12 3.42593 11.8935 3.68981 11.6806 3.90278C11.4676 
                      4.11574 11.2037 4.22222 10.8889 4.22222H4.22222V19.7778H19.7778V13.1111C19.7778 12.7963 19.8843 12.5324 20.0972 
                      12.3194C20.3102 12.1065 20.5741 12 20.8889 12C21.2037 12 21.4676 12.1065 21.6806 12.3194C21.8935 
                      12.5324 22 12.7963 22 13.1111V19.7778C22 20.3889 21.7824 20.912 21.3472 21.3472C20.912 21.7824 20.3889 22 19.7778 
                      22H4.22222ZM8.66667 15.3333C8.46296 15.1296 8.36111 14.8704 8.36111 14.5556C8.36111 14.2407 8.46296 13.9815 8.66667 
                      13.7778L18.2222 4.22222H15.3333C15.0185 4.22222 14.7546 4.11574 14.5417 3.90278C14.3287 3.68981 14.2222 3.42593 
                      14.2222 3.11111C14.2222 2.7963 14.3287 2.53241 14.5417 2.31944C14.7546 2.10648 15.0185 2 15.3333 2H20.8889C21.2037 
                      2 21.4676 2.10648 21.6806 2.31944C21.8935 2.53241 22 2.7963 22 3.11111V8.66667C22 8.98148 21.8935 9.24537 21.6806
                      9.45833C21.4676 9.6713 21.2037 9.77778 20.8889 9.77778C20.5741 9.77778 20.3102 9.6713 20.0972 9.45833C19.8843 
                      9.24537 19.7778 8.98148 19.7778 8.66667V5.77778L10.1944 15.3611C9.99074 15.5648 9.74074 15.6667 9.44445 
                      15.6667C9.14815 15.6667 8.88889 15.5556 8.66667 15.3333Z" fill="#CCE9FF">
                    </path>
                  </g>
                </svg>
              </a>
              ` : html` `}
            </div>
            </div>
          </div>` : html`
        </div>
        <div class="block">
          <div class="content">
            <h3> ${this.boxText1} </h3>
            <p> ${this.multiFields ? html`<b></b> <p> ${this.boxText2} </p>` : html` `}</p>
          </div>
        </div>
      `}
    `;
  }
}

customElements.define('psu-block', PsuBlock);