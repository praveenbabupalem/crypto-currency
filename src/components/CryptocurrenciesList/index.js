import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {
    cryptocurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/crypto-currency-converter',
      )
      const data = await response.json()
      const updatedData = data.map(eachItem => ({
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
      }))

      this.setState({
        cryptocurrenciesList: updatedData,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error:', error)
      this.setState({isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCryptocurrencies = () => {
    const {cryptocurrenciesList} = this.state
    console.log(cryptocurrenciesList)

    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div>
          <p>COIN TYPE</p>
          <p>USD</p>
          <p>EURO</p>
        </div>
        <ul>
          {cryptocurrenciesList.map(crypto => (
            <CryptocurrencyItem crypto={crypto} key={crypto.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderLoader() : this.renderCryptocurrencies()
  }
}

export default CryptocurrencyList
