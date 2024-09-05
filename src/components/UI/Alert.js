export const Alert = ({ message, type }) => {
  return (
    <div className={`p-4 mb-4 rounded-md ${type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
        {message}
    </div>
  )
}