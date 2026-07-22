## Alumno: Lester Garcia

# Procesamiento y Validación de Mezclas Químicas

Este proyecto implementa un sistema automatizado en JavaScript puro para la gestión, cálculo de masa y validación de integridad de compuestos químicos en un entorno de laboratorio educativo. El sistema está diseñado siguiendo buenas prácticas de desarrollo, priorizando la inmutabilidad de los datos y el procesamiento funcional de colecciones.

## Descripción General

El programa recibe un inventario estructurado de compuestos químicos, donde cada elemento cuenta con un conjunto de componentes individuales definidos por su símbolo químico y su peso en gramos. La lógica de negocio realiza de forma secuencial las siguientes acciones:

1. **Cálculo Ponderado de Masa**: Suma lineal de las cantidades de gramos de todos los componentes que integran un compuesto químico para determinar su masa total.
2. **Validación de Integridad**: Comprobación estricta de las métricas registradas. Si algún componente posee una cantidad igual o inferior a cero gramos (`gramos <= 0`), la fórmula se determina como incompleta o defectuosa.
3. **Filtrado Excluyente**: Aislamiento y remoción automática de los compuestos que no superaron la validación de integridad, garantizando que solo las mezclas correctas avancen al reporte definitivo.
4. **Generación de Reportes**: Visualización estructurada en consola que detalla el nombre del compuesto aprobado, su masa final calculada y el desglose individual de sus componentes válidos.

## Detalles de Arquitectura Técnica

- **Inmutabilidad**: El procesamiento utiliza métodos como `.map()` y el operador spread (`...`) para generar nuevas estructuras enriquecidas sin alterar ni ensuciar el arreglo original de datos maestros.
- **Validación Predictiva**: Se implementa el método `.every()` para evaluar de forma eficiente que todos los subelementos cumplan de manera unánime con la regla de negocio establecida (valores estrictamente positivos).
- **Limpieza de Datos**: Se emplea desestructuración de objetos en el flujo de datos para remover propiedades temporales de control operacional antes de la salida final del reporte.

## Requisitos de Ejecución

El código está escrito en JavaScript estándar (ES6+) sin dependencias externas, por lo que puede ejecutarse directamente en:
- Cualquier consola de navegador web moderna (Chrome, Firefox, Edge, Safari).
- Entornos de ejecución del lado del servidor como Node.js.