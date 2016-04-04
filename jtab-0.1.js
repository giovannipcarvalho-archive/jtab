/*
 * Giovanni Paolo
 * jtab plugin, v0.1
 * Thu Oct 30 21:20:09 PDT 2014
 */

$(document).ready(function(){

		$('.jtab').hide(); //esconder todas as abas jtab
		$('.jmaintab').show(); //mostrar a aba principal jmaintab

		var selectedtab = $('.jmaintab').attr('id'); //descobrir o ID da aba principal
		$('[nav="' + selectedtab + '"]').addClass('jtabactive'); //adicionar a classe jtabactive ao menu correspondente à aba ativa
		
		
		$('.jtabnav').click(function(){ //sempre que um menu de navegaçao jtabnav for clicado
				var tabname = $(this).attr('nav'); //descobrir o ID da aba correspondente ao menu clicado
				$('#' + selectedtab).hide(); //ocultar a aba selecionada anteriormente
				$('#' + tabname).show(); //mostrar a nova aba
				$('[nav="' + selectedtab + '"]').removeClass('jtabactive'); //remover classe jtabactive do menu anteriormente clicado
				$('[nav="' + tabname + '"]').addClass('jtabactive'); //adicionar classe jtabactive ao novo menu clicado
				selectedtab = tabname; //atualizar a aba selecionada para o menu clicado mais recentemente
		});

});
