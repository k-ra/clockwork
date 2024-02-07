import { writable } from 'svelte/store';
import entriesData from '../assets/entriesData.json';

export const entries = writable(entriesData);
