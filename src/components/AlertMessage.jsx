
export const AlertMessage = ({ alertType, message }) => {
    
  return (
    <div className={`animate__animated animate__fadeIn alert alert-${alertType}`}>
            { message }
    </div>
  )
}
