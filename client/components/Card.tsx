export default function Card({ name, phoneNumber, address, email, avatar }) {
	return (
		<div className="card">
			<div className="card-avatar">
				<img src={avatar} alt="" />
			</div>
			<div className="card-infos">
				<p>{name}</p>
				<p>
					<a className="card-email" href={`tel:${phoneNumber}`}>
						{phoneNumber}
					</a>
				</p>
				<p>
					<a className="card-email" href={`mailto:${email}`}>
						{email}
					</a>
				</p>

				<div>
					<p>{address.street}</p>
					<p>
						{address.city} - {address.zipCode}{' '}
					</p>
				</div>
			</div>
		</div>
	);
}
