export default function trimText(text, length, end = '') {
  let result = text.slice(0, length);
  let i = length;
  
  while( text[i] && text[i] != " " ) {
    result += text[ i++ ];
  }
  
  if (text.length < length) {
    return result
  } else {

    return result + end;
  }

}