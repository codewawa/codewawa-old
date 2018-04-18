import md5 from 'md5';
export default function getGravatarImg(email, size) {
  try {
    let url = 'https://www.gravatar.com/avatar/';
    url += md5(email);
    url += size ? `?s=${size}` : '';
    return url;
  } catch (e) {
    console.log(e);
    return null;
  }
}
