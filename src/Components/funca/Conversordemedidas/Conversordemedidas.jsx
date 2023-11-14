import "./conversordemedidas.css"
import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class CulinaryConverter extends Component {
  constructor() {
    super();
    this.state = {
      cups: 0,
      grams: 0,
      liters: 0,
      milliliters: 0,
      gramsToSpoons: 0,
      spoons: 0,
    };
  }

  convertCupsToGrams = () => {
    const cups = parseFloat(this.state.cups);
    if (!isNaN(cups)) {
      const grams = cups * 240;
      this.setState({ grams });
    }
  };

  convertGramsToCups = () => {
    const grams = parseFloat(this.state.grams);
    if (!isNaN(grams)) {
      const cups = grams / 240;
      this.setState({ cups });
    }
  };

  convertLitersToMilliliters = () => {
    const liters = parseFloat(this.state.liters);
    if (!isNaN(liters)) {
      const milliliters = liters * 1000;
      this.setState({ milliliters });
    }
  };

  convertMillilitersToLiters = () => {
    const milliliters = parseFloat(this.state.milliliters);
    if (!isNaN(milliliters)) {
      const liters = milliliters / 1000;
      this.setState({ liters });
    }
  };

  convertGramsToSpoons = () => {
    const grams = parseFloat(this.state.gramsToSpoons);
    if (!isNaN(grams)) {
      const spoons = grams / 5;
      this.setState({ spoons });
    }
  };

  convertSpoonsToGrams = () => {
    const spoons = parseFloat(this.state.spoons);
    if (!isNaN(spoons)) {
      const grams = spoons * 5;
      this.setState({ grams });
    }
  };

  handleCupsChange = (e) => {
    this.setState({ cups: e.target.value }, this.convertCupsToGrams);
  };

  handleGramsChange = (e) => {
    this.setState({ grams: e.target.value }, this.convertGramsToCups);
  };

  handleLitersChange = (e) => {
    this.setState({ liters: e.target.value }, this.convertLitersToMilliliters);
  };

  handleMillilitersChange = (e) => {
    this.setState({ milliliters: e.target.value }, this.convertMillilitersToLiters);
  };

  handleGramsToSpoonsChange = (e) => {
    this.setState({ gramsToSpoons: e.target.value }, this.convertGramsToSpoons);
  };

  handleSpoonsChange = (e) => {
    this.setState({ spoons: e.target.value }, this.convertSpoonsToGrams);
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <div className="diviado">

        <div className="titulo-con">
          <h2>Conversor de Medidas Culinárias</h2>

        </div>

        <div className="divasso">

          <div className='divo'>
            <div>
              <label>
                Xícaras:
                <input
                  type="number"
                  value={this.state.cups}
                  onChange={this.handleCupsChange}
                />
              </label>
              {/* {typeof this.state.grams === 'number' && (
            <p>
              Gramas: {this.state.grams.toFixed(2)}
            </p>
          )} */}
            </div>

            <div>
              <label>
                Gramas:
                <input
                  type="number"
                  value={this.state.grams}
                  onChange={this.handleGramsChange}
                />
              </label>
              {/* {typeof this.state.cups === 'number' && (
            <p>
              Xícaras: {this.state.cups.toFixed(2)}
            </p>
          )} */}
            </div>

          </div>

          <div className='divo'>
            <div>
              <label>
                Litros:
                <input
                  type="number"
                  value={this.state.liters}
                  onChange={this.handleLitersChange}
                />
              </label>
              {/* {typeof this.state.milliliters === 'number' && (
            <p>
              Mililitros: {this.state.milliliters.toFixed(2)}
            </p>
          )} */}
            </div>

            <div>
              <label>
                Mililitros:
                <input
                  type="number"
                  value={this.state.milliliters}
                  onChange={this.handleMillilitersChange}
                />
              </label>
              {/* {typeof this.state.liters === 'number' && (
            <p>
              Litros: {this.state.liters.toFixed(2)}
            </p>
          )} */}
            </div>

          </div>

          <div className='divo'>
            <div>
              <label>
                Gramas:
                <input
                  type="number"
                  value={this.state.gramsToSpoons}
                  onChange={this.handleGramsToSpoonsChange}
                />
              </label>
              {/* {typeof this.state.spoons === 'number' && (
            <p>
              Colheres de chá: {this.state.spoons.toFixed(2)}
            </p>
          )} */}
            </div>

            <div>
              <label>
                Colheres de chá:
                <input
                  type="number"
                  value={this.state.spoons}
                  onChange={this.handleSpoonsChange}
                />
              </label>
              {/* {typeof this.state.gramsToSpoons === 'number' && (
            <p>
              Gramas: {this.state.gramsToSpoons.toFixed(2)}
            </p>
          )} */}
            </div>

          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CulinaryConverter;
