
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <p className="text-sm pb-6 text-gray-600 text-center">
        &copy; {currentYear} <a href="https://blug.polibatam.ac.id" className="text-gray-900">Batam Linux User Group.</a> All rights reserved.
      </p>
    </div>
  )
}

export default Footer