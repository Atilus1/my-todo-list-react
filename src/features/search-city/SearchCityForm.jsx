import Field from '@/shared/ui/Field'
import Button from '@/shared/ui/Button'

const SearchCityForm = (props) => {
  const { 
    styles,
    addCity,
    newCityTitle,
    setNewCityTitle,
    getWither,
    API_Key1,
    API_Key2,
  } = props


  const onSubmitCity = (event) => {
    event.preventDefault()
    getWither(newCityTitle, API_Key1, API_Key2)
      addCity()
  }

  return (
    <form className={styles.form} onSubmit={onSubmitCity}>
      <Field
        className={styles.field}
        label="Название города"
        id="city-name"
        value={newCityTitle}
        onInput={(event) => setNewCityTitle(event.target.value)}
        type="search"
      />
      <Button
        type="submit"
      >
        Найти
      </Button>
    </form>
  )
}

export default SearchCityForm
