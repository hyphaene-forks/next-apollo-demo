type NameProps = {
	data: {
		loading: boolean;
		data: {
			name: string;
		};
	};
};

const Name = ({ data }: NameProps) => {
	return <span>{data.loading ? '..' : data.data.name}</span>;
};

export default Name;
