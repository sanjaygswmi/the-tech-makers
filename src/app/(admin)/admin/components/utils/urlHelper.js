// import React from 'react';
import { useSearchParams } from 'next/navigation';

export function useSearchParamsWithSuspense() {
    // const router = useRouter();
    const searchParams = useSearchParams();

    if (!searchParams) {
        throw new Promise(resolve => resolve());
    }

    return searchParams;
}


export function searchParams() {
    try {
      const searchParams = window.location.search;
      let params = searchParams.replace("?", "");
  
      if( params == "" ){
        return [];
      }
      
      params = params.split('&');
  
      const queryParams = {};
      params.forEach(param => {
        const [key, value] = param.split('=');
        let decodedValue = value;
  
        if( key != "location" ){
          decodedValue = decodeURIComponent(value);
        }
  
        if (decodedValue.includes(",")) {
          decodedValue = decodedValue.split(",").map(part => decodeURIComponent(part));
        } else {
          decodedValue = decodeURIComponent(decodedValue);
        }
  
        queryParams[key] = decodedValue;
      });
  
      return queryParams;
    } catch (error) {
      return error;
    }
  }
  
  export function combineSearchParams(params) {
    const flattenedParams = [];
  
    for (const key in params) {
      const value = params[key];
      if (Array.isArray(value)) {
        flattenedParams.push(`${key}=${encodeURIComponent(value.join(","))}`);
      } else {
        flattenedParams.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
  
    return flattenedParams.join('&');
  }