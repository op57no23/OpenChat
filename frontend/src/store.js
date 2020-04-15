import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
		state: {
			user: null
		},
		mutations: {
			SET_USER_DATA (state, userData) {
				state.user = userData.user._id;
				localStorage.setItem('user', JSON.stringify({user: {_id: state.user, name: userData.user.name}, token: userData.token}));
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + userData.token;
			},
			LOGOUT (state) {
				state.user = null;
				localStorage.removeItem('user');
				axios.defaults.headers.common['Authorization'] = null;
			}
		},
		actions: {
			register ({ commit}, credentials) {
				return axios.post('//localhost:3000/register', credentials)
				.then(({data}) => {
									commit('SET_USER_DATA', data);
				})
			},

			login ({ commit }, credentials) {
				return axios
				.post('//localhost:3000/login', credentials)
				.then(({ data}) => {
					commit('SET_USER_DATA', data)
				})
			},
			logout({ commit }) {
				commit('LOGOUT')
			}
		}
})
