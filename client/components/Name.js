const Name = ({ data }) => {
	return <span>{data.loading ? '..' : data.data.name}</span>;
};

export default Name;
