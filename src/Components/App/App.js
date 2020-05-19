import React, {Component} from 'react';

import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [0, 0, 0, 0, 0, 0],
            bonusScore: 0,
            totalUpper: 0,
            totalLower: 0,
            grandTotal: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange (e) {
        const { name, value } = e.target;
        let newScores = [...this.state.scores];
        if (parseInt(value)) {
            newScores[name] = parseInt(value);
            this.setState({scores: newScores});
            const total = newScores.reduce((arr, el) => arr + el);
            this.setState({totalUpper: total});

            if (total >= 63) {
                let bonus = 35 + total;
                this.setState({bonusScore: bonus});
            } else {
                this.setState({bonusScore: total})
            }
        } else {
            alert('Please enter a number 1 - 9');
            e.target.value = '';
        }
    }


    render() {
        return (
            <div className={(styles.App)}>
              <div className={styles.ScoreCard}>
                  <div  className={styles.Scores}>
                      <input name={0} value={this.state.scores[0] === 0 ? '' : this.state.scores[0]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={1} value={this.state.scores[1] === 0 ? '' : this.state.scores[1]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={2} value={this.state.scores[2] === 0 ? '' : this.state.scores[2]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={3} value={this.state.scores[3] === 0 ? '' : this.state.scores[3]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={4} value={this.state.scores[4] === 0 ? '' : this.state.scores[4]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={5} value={this.state.scores[5] === 0 ? '' : this.state.scores[5]} onChange={this.handleChange} className={styles.Input} type="text"/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={'totalUpper'}  value={this.state.totalUpper ? this.state.totalUpper : ''}  className={styles.Input} type="text" readOnly={true}/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={'bonus'} value={this.state.totalUpper >= 63 ? 35: ''}  className={styles.Input} type="text" readOnly={true}/>
                  </div>
                  <div  className={styles.Scores}>
                      <input name={'bonusScore'} value={this.state.bonusScore === 0 ? '' : this.state.bonusScore} className={styles.Input} type="text" readOnly={true}/>
                  </div>
              </div>
            </div>
        );
    }
}

export default App;