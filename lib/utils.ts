import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export function openLink(url: string) {
 window.open(url, '_blank');
}

export function getRandomMockServerDelay() {
 const maxDelay: number = 2500;
 return Math.floor(Math.random() * maxDelay);
}

export const extractRouteId = (id: string) => {
 return id.split('-').join(' ');
};

export const createRouteId = (id: string) => {
 return id.split(' ').join('-');
};
