import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles() {
    return css`
    :host {
      min-height: 100vh;
      padding-top: 10px;
      flex-direction: column;
      align-items: flex;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
    }

    .container {
      max-width: 1440px;
      gap: 16px;
      margin-top: 2rem;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .block1 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
    }

    .block2 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #001e44;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .block3 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .block4 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
      background-size: cover;
    }

    .link4 {
      color: #ffffff;
      text-decoration: none;
    }

    .block5 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      text-align: left;
      color: #ffffff;
      display: flex;
      align-items: center;
    }

    .block6 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #001e44;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .block7 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .block8 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
    }

    .block9 {
      margin-top: 20px;
      margin-left: 50px;
      width: 393px;
      height: 323px;
      color: #ffffff;
      text-align: left;
      display: flex;
      align-items: center;
      background-size: cover;
    }

    .card-link {
      color: #ffffff;
      text-decoration: none;
    }
  `;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="container">
      <div class="block1" style="background-color: #1e407c; ">
        <div class="content">
          <h3>88,000+ students </h3>
        </div>
      </div>
      <div class="block2" style="background-color: #ffffff; ">
        <div class="content">
          <h3>58% </h3>
            <b>_____________</b>
            <p>Of students are Pennsylvania residents. </p>
        </div>
      </div>
      <div class="block3" style="background-color: rgb(30,64,124); background: -moz-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); background: -webkit-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);; ">
        <div class="content">
          <h3>Students from 50 states and 145 countries</h3>
        </div>
      </div>
      <div class="block4" style="background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg); ">
        <div class="content">
          <a href="https://admissions.psu.edu/apply/statistics/" class="card-link">
            <h3>Check out Undergraduate Admissions statistics</h3>
          </a>
        </div>
      </div>
      <div class="block5" style="background-color: #1e407c; ">
        <div class="content">
          <h3>Nearly 10,000 international students </h3>
        </div>
      </div>
      <div class="block6" style="background-color: #ffffff; ">
        <div class="content">
          <h3>39% </h3>
          <b>_____________</b>
          <p>Of students are from diverse backgrounds. </p>
        </div>
      </div>
      <div class="block7" style="background-color: #001e44; ">
        <div class="content">
          <h3>7,900+ faculty across all campuses</h3>
        </div>
      </div>
      <div class="block8" style="background-color: #001e44; ">
        <div class="content">
          <h3>759,000+ alumni</h3>
        </div>
      </div>
      <div class="block9" style="background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/data-digest.jpg); ">
        <div class="content">
          <a href="https://datadigest.psu.edu/" class="card-link">
            <h3>See Penn State's Data Digest dashboards</h3>
          </a>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('psu-block', PsuBlock);