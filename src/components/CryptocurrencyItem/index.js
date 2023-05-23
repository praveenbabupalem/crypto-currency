const CryptocurrencyItem = props => {
  const {crypto} = props
  return (
    <li>
      <div>
        <img src={crypto.currencyLogo} alt={crypto.currencyName} />
      </div>
      <div>
        <p>{crypto.currencyName}</p>
        <p>USD Value: {crypto.usdValue}</p>
        <p>Euro Value: {crypto.euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
