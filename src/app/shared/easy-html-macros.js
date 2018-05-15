module.exports =  {
	input(data) {
		console.log('arguments',data)
		const args = data.attrs;

		return `
			<div class="form-group" ${attrs('w', args)}>
				<label ${attrs('l', args)}>${args.label}</label>
				<input  ${attrs('e', args)} />
			</div>
		`;
	}
}

// get all attributes with the specified prefix
function attrs(prefix, args) {
	res = '';
	args.forEach(v => {
		if (v.lhs.indexOf(prefix) > -1) {
			res += ` ${v.lhs}`
      if (v.rhs.length > 0) res += `="${v.rhs.join(' ')}"`
		}

		return res;
	})
}