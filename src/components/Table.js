import react, { createElement } from 'react';

const Table = () => {
  function getData() {
    const tableRow = document.querySelector('.tr');
    let data = [];

    if (localStorage.getItem('data') === null) {
      data = [];
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      data = JSON.parse(localStorage.getItem('data'));
      console.log(data);

      data.forEach(function (items) {
        let output;
        output = `<tr>${items.firstName}</tr>
        <tr>${items.lastName}</tr>
        <tr>${items.username}</tr>
        <tr>${items.email}</tr>
        <tr>${items.description}</tr>
        <tr>${items.mobileNo}</tr>
        <tr>${items.skills}</tr>
        <tr>${items.totalExp}</tr>`;
        console.log(output);
        //document.querySelector('.tr').innerHTML(output);
      });
    }
  }

  getData();
  return (
    <div style={{ fontSize: '11px' }}>
      <h3 style={{ textAlign: 'center' }}>TABLE</h3>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>Experince</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="tr"></tbody>
      </table>
    </div>
  );
};

export default Table;
