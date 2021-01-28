import { CancelToken } from 'axios'

export default function cancelableRequest(fn) {
	let source = CancelToken.source();
	return {
		execute: (...params) => {
			source = CancelToken.source();
			return fn(source.token)(...params)
		},
		cancel: (message = 'Operation canceled') => source.cancel(message)
	}
}
