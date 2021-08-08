const mockData = {
  loading:false,
  name: 'Mock Name'
}
// TODO : remove mockData when apollo configuration is done.
const Name = ({ data = mockData }) => (
  <span>
    {data.loading? '..' : data.name}
  </span>
)

// TODO : add a query to fetch the name

export default Name
