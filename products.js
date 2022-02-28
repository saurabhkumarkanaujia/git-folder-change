$(document).ready(function () {
	display();


	$("#search").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#table1 tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$("#id_brand,#id_os").on("change", function () {
		var brand_values = $('#id_brand').find("option:selected").val();
		var os_values = $('#id_os').find("option:selected").val();
		SearchData(brand_values, os_values);
	});
	$("#output").on("click", "#remove_link", function () {

		$($(this).parent()).parent().hide();
	});

});


var products = [{
	"id": "100",
	"name": "iPhone 4S",
	"brand": "Apple",
	"os": "iOS"
},
{
	"id": "101",
	"name": "Moto X",
	"brand": "Motorola",
	"os": "Android"
},
{
	"id": "102",
	"name": "iPhone 6",
	"brand": "Apple",
	"os": "iOS"
},
{
	"id": "103",
	"name": "Samsung Galaxy S",
	"brand": "Samsung",
	"os": "Android"
},
{
	"id": "104",
	"name": "Google Nexus",
	"brand": "ASUS",
	"os": "Android"
},
{
	"id": "105",
	"name": "Surface",
	"brand": "Microsoft",
	"os": "Windows"
}];

function display() {
	var result = " ";
	var brand_content = "";
	var os_content = "";
	if (products.length === 0) {
		$("#output").html(`no values found`);
	}

	for (var i = 0, j = 0; i < products.length; i++, j++) {
		result += `<tr id='${products[i].id}'>
		<td class="data_row">${products[i].id}</td>
		<td class="data_row">${products[i].name}</td>
		<td class="data_row">${products[i].brand}</td>
		<td class="data_row">${products[i].os}</td><td><a href ="#" id="remove_link" data-rowId='${products[i].id}')">Remove</a></td></tr>`

		brand_content += `<option value="${products[i].brand}">${products[i].brand}</option>`;
		os_content += `<option value="${products[i].os}">${products[i].os}</option>`;

	}
	$("#output").html(`
	<input type="text" placeholder="search.." id ="search">
		
		<select class="cl_brand" id="id_brand">
		<option value="all">ALL </option>
		${brand_content}
		</select>

		<select class="cl_os" id="id_os">
		<option value="all">ALL </option>
		${os_content}
		</select>
		<table id ='table1' style="width: 100%" border="1px">\
			<tr>\
				<th class='table_heading'>Id</th>\
				<th class='table_heading'>Name</th>\
				<th class='table_heading'>Brand</th>\
				<th class='table_heading'>Operating System</th>\
				<th class='table_heading'>Remove</th>\
			</tr>${result}</table>`);

}



function SearchData(brand_values, os_values) {
	if (brand_values.toUpperCase() == 'ALL' && os_values.toUpperCase() == 'ALL') {
		$('#table1 tbody tr').show();
	} else {
		$('#table1 tbody tr:has(td)').each(function () {
			var rowbrand_values = $.trim($(this).find('td:nth-child(3)').text());
			var rowos_values = $.trim($(this).find('td:nth-child(4)').text());
			if (brand_values.toUpperCase() != 'ALL' && os_values.toUpperCase() != 'ALL') {
				if (rowbrand_values.toUpperCase() == brand_values.toUpperCase() && rowos_values == os_values) {
					$(this).show();
				} else {
					$(this).hide();
				}
			} else if ($(this).find('td:eq(1)').text() != '' || $(this).find('td:eq(1)').text() != '') {
				if (brand_values != 'all') {
					if (rowbrand_values.toUpperCase() == brand_values.toUpperCase()) {
						$(this).show();
					} else {
						$(this).hide();
					}
				}
				if (os_values != 'all') {
					if (rowos_values == os_values) {
						$(this).show();
					}
					else {
						$(this).hide();
					}
				}
			}

		});
	}
}