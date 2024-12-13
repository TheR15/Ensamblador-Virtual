document.addEventListener('DOMContentLoaded', function () {
    const btnGabinete = document.querySelector('.info-gabinete');
    const btnMotherboard = document.querySelector('.info-tarjeta-madre');
    const btnProcesador = document.querySelector('.info-procesador');
    const btnDisipador = document.querySelector('.info-disipador');
    const btnRAM = document.querySelector('.info-ram');
    const btnAlmacenamiento = document.querySelector('.info-almacenamiento');
    const btnGrafica = document.querySelector('.info-grafica');
    const btnFuente = document.querySelector('.info-fuente');
    btnGabinete.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="formulario-modal aprendizaje-modal">
                <h1>Gabinete</h1>
                <div class="contenedor-modal">
                    <div class="caracteristicas">
                        <h2>Función Principal</h2>
                        <p>Protege los componentes internos (como la placa base, procesador, RAM, disco duro, etc.) contra daños físicos, polvo, suciedad y líquidos.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Características del Gabinete</h2>
                        <ul>
                            <li><strong>Tamaño y Tipo:</strong> Full Tower, Mid Tower, Mini Tower y Small Form Factor para diferentes necesidades.</li>
                            <li><strong>Compatibilidad:</strong> Soporte para placas base ATX, Micro-ATX y Mini-ITX.</li>
                            <li><strong>Capacidad de Almacenamiento:</strong> Espacios para discos duros de 3.5", SSDs de 2.5" y accesorios ópticos de 5.25".</li>
                            <li><strong>Ventilación:</strong> Soporte para ventiladores múltiples y sistemas de enfriamiento líquido.</li>
                            <li><strong>Conectividad:</strong> Puertos USB 3.0, USB-C, entrada y salida de audio en el panel frontal.</li>
                        </ul>
                    </div>
                    <div class="caracteristicas">
                        <h2>Materiales de Construcción</h2>
                        <p>Generalmente fabricados con acero SECC, aluminio o plástico reforzado. Algunos modelos incluyen paneles de vidrio templado para una estética moderna.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Gestión de Cables</h2>
                        <p>Incluyen pasacables y espacio dedicado para ocultar y organizar cables, mejorando la estética interna y optimizando el flujo de aire.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Estética y Personalización</h2>
                        <p>Muchos gabinetes modernos cuentan con iluminación RGB, paneles transparentes y opciones de personalización para crear configuraciones únicas.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Consejos Prácticos</h2>
                        <ul>
                            <li>Elige un gabinete que ofrezca espacio suficiente para futuras actualizaciones.</li>
                            <li>Considera modelos con filtros de polvo desmontables para facilitar la limpieza.</li>
                            <li>Verifica la longitud máxima soportada para tarjetas gráficas y la altura del disipador de CPU.</li>
                        </ul>
                    </div>
                    <div class="caracteristicas">
                        <img src="../img/gabinete.png"></img>
                    </div>
                </div>
                <div class="acciones">
                    <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
                </div>
            </div>

        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnMotherboard.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="formulario-modal aprendizaje-modal">
    <h1>Tarjeta Madre</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>Es el componente principal que conecta y coordina todos los demás componentes del sistema, como el procesador, la memoria RAM, el almacenamiento y las tarjetas de expansión.</p>
        </div>
        <div class="caracteristicas">
            <h2>Características de la Tarjeta Madre</h2>
            <ul>
                <li><strong>Compatibilidad:</strong> Diseñadas para procesadores específicos de Intel o AMD, con soporte para diferentes generaciones.</li>
                <li><strong>Chipset:</strong> Define las capacidades de la tarjeta, como overclocking, soporte para más ranuras PCIe o USB.</li>
                <li><strong>Ranuras de Memoria:</strong> Cantidad de ranuras disponibles para RAM, con soporte para tecnologías como DDR4 o DDR5.</li>
                <li><strong>Puertos de Expansión:</strong> Incluyen ranuras PCIe para tarjetas gráficas, de sonido o de red.</li>
                <li><strong>Conectividad:</strong> Soporte para USB 3.2, USB-C, Ethernet, Wi-Fi y Bluetooth integrados en algunos modelos.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Factores de Forma</h2>
            <p>Están disponibles en varios tamaños: ATX, Micro-ATX y Mini-ITX, cada uno adaptado a diferentes necesidades de espacio y funcionalidad.</p>
        </div>
        <div class="caracteristicas">
            <h2>Puertos y Conexiones</h2>
            <p>Incluyen puertos SATA para discos duros y SSDs, ranuras M.2 para almacenamiento NVMe, y conectores para ventiladores y enfriamiento.</p>
        </div>
        <div class="caracteristicas">
            <h2>Estética y Personalización</h2>
            <p>Algunos modelos incluyen iluminación RGB integrada y disipadores de diseño atractivo para una configuración personalizada.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Asegúrate de que la tarjeta madre sea compatible con el procesador que planeas usar.</li>
                <li>Considera el número de puertos y ranuras según tus necesidades actuales y futuras.</li>
                <li>Opta por un modelo con disipadores en los VRM si planeas hacer overclocking.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/motherboard.jpg" alt="Imagen de una tarjeta madre">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>

        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnProcesador.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
           <div class="formulario-modal aprendizaje-modal">
    <h1>Procesador</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>Es el cerebro de la computadora, encargado de ejecutar las instrucciones y realizar cálculos necesarios para que el sistema y las aplicaciones funcionen correctamente.</p>
        </div>
        <div class="caracteristicas">
            <h2>Características del Procesador</h2>
            <ul>
                <li><strong>Frecuencia de Reloj:</strong> Indicada en GHz, determina la velocidad a la que el procesador puede ejecutar instrucciones.</li>
                <li><strong>Núcleos y Subprocesos:</strong> Define la capacidad de multitarea y procesamiento paralelo.</li>
                <li><strong>Arquitectura:</strong> Tecnología de fabricación (por ejemplo, 7nm, 10nm) que influye en el rendimiento y eficiencia energética.</li>
                <li><strong>Cache:</strong> Memoria integrada en el procesador para acelerar el acceso a datos frecuentemente usados.</li>
                <li><strong>Compatibilidad:</strong> Diseñado para sockets específicos como LGA1200 (Intel) o AM5 (AMD).</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Tipos de Procesadores</h2>
            <p>Existen procesadores para diferentes necesidades:</p>
            <ul>
                <li><strong>Procesadores de Entrada:</strong> Ideales para tareas básicas como navegación web y ofimática.</li>
                <li><strong>Procesadores de Gama Media:</strong> Buen equilibrio entre rendimiento y costo, aptos para gaming y multitarea.</li>
                <li><strong>Procesadores de Alta Gama:</strong> Diseñados para profesionales que necesitan gran potencia en tareas como edición de video o modelado 3D.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Refrigeración</h2>
            <p>El procesador genera calor, por lo que es crucial contar con un sistema de enfriamiento adecuado (aire o líquido) para evitar sobrecalentamiento.</p>
        </div>
        <div class="caracteristicas">
            <h2>Estética y Overclocking</h2>
            <p>Algunos procesadores soportan overclocking para maximizar su rendimiento. Además, ciertas configuraciones cuentan con disipadores personalizados que mejoran la estética.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Elige un procesador compatible con la tarjeta madre (socket y chipset).</li>
                <li>Considera el número de núcleos según tus necesidades (gaming, trabajo, tareas pesadas).</li>
                <li>Investiga si necesitas un enfriador adicional o si el incluido es suficiente.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/procesador.jpg" alt="Imagen de un procesador">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>


        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnDisipador.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
           <div class="formulario-modal aprendizaje-modal">
                <h1>Disipador</h1>
                <div class="contenedor-modal">
                    <div class="caracteristicas">
                        <h2>Función Principal</h2>
                        <p>El disipador es responsable de extraer el calor generado por el procesador u otros componentes y disiparlo al ambiente, ayudando a mantener una temperatura adecuada de funcionamiento.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Características del Disipador</h2>
                        <ul>
                            <li><strong>Material:</strong> Los disipadores suelen estar hechos de aluminio o cobre, materiales con alta conductividad térmica.</li>
                            <li><strong>Tipología:</strong> Existen disipadores de aire (con ventiladores) y de líquido (con radiadores y bombas de circulación de líquido).</li>
                            <li><strong>Compatibilidad:</strong> Debe ser compatible con el socket del procesador y el tamaño del gabinete para instalarse correctamente.</li>
                            <li><strong>Potencia de Enfriamiento:</strong> Dependiendo de la tecnología y el tamaño, los disipadores varían en su capacidad para enfriar el procesador de manera eficiente.</li>
                            <li><strong>Ruido:</strong> Los disipadores de aire pueden generar ruido por el ventilador, mientras que los de líquido suelen ser más silenciosos.</li>
                        </ul>
                    </div>
                    <div class="caracteristicas">
                        <h2>Tipos de Disipadores</h2>
                        <p>Existen varios tipos de disipadores según las necesidades de refrigeración:</p>
                        <ul>
                            <li><strong>Disipadores de Aire:</strong> Generalmente más baratos y fáciles de instalar, incluyen un ventilador que disipa el calor hacia el exterior del gabinete.</li>
                            <li><strong>Disipadores Líquidos (AIO):</strong> Usan un sistema cerrado con líquido refrigerante, son más eficientes y silenciosos, ideales para overclocking o sistemas de alto rendimiento.</li>
                        </ul>
                    </div>
                    <div class="caracteristicas">
                        <h2>Instalación</h2>
                        <p>La instalación del disipador depende del tipo. Los disipadores de aire requieren anclarse a la placa base y conectarse a la fuente de alimentación, mientras que los disipadores líquidos incluyen radiador y bomba para circular el líquido refrigerante.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Estética y Diseño</h2>
                        <p>Muchos disipadores incluyen iluminación RGB o un diseño atractivo para mejorar la apariencia del sistema, especialmente en configuraciones personalizadas.</p>
                    </div>
                    <div class="caracteristicas">
                        <h2>Consejos Prácticos</h2>
                        <ul>
                            <li>Asegúrate de que el disipador sea compatible con el tamaño del gabinete y el socket del procesador.</li>
                            <li>Si planeas hacer overclocking, opta por disipadores líquidos o de aire de alto rendimiento.</li>
                            <li>Considera la eficiencia de enfriamiento del disipador y el nivel de ruido generado.</li>
                        </ul>
                    </div>
                    <div class="caracteristicas">
                        <img src="../img/disipador.png" alt="Imagen de un disipador">
                    </div>
                </div>
                <div class="acciones">
                    <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
                </div>
            </div>



        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnRAM.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="formulario-modal aprendizaje-modal">
    <h1>Memoria RAM</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>La memoria RAM (Random Access Memory) almacena temporalmente los datos y programas que la CPU necesita para realizar sus tareas. Es crucial para el rendimiento general del sistema, ya que facilita el acceso rápido a los datos.</p>
        </div>
        <div class="caracteristicas">
            <h2>Características de la Memoria RAM</h2>
            <ul>
                <li><strong>Capacidad:</strong> La capacidad de RAM se mide en GB y determina cuántos datos pueden almacenarse temporalmente. Usualmente, se recomienda un mínimo de 8GB para un rendimiento óptimo en la mayoría de las tareas.</li>
                <li><strong>Velocidad:</strong> Se mide en MHz (megahercios), y la velocidad de la RAM influye en la rapidez con que se puede acceder a los datos almacenados. Las velocidades comunes son 2400 MHz, 3000 MHz, 3200 MHz, entre otras.</li>
                <li><strong>Tipo de Memoria:</strong> DDR (Double Data Rate) es la tecnología más común, con versiones como DDR4 y DDR5, cada una ofreciendo mejoras en velocidad y eficiencia energética.</li>
                <li><strong>Latencia:</strong> La latencia se mide en CL (Cas Latency) y afecta el tiempo que tarda en acceder a los datos. Menor latencia se traduce en un rendimiento más rápido.</li>
                <li><strong>Canales:</strong> La memoria RAM puede funcionar en un canal simple (1x RAM) o en un sistema de canales dobles o cuádruples (2x o 4x), lo que mejora el ancho de banda y el rendimiento general.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Tipos de Memoria RAM</h2>
            <p>Existen diferentes tipos de RAM según la generación y el uso:</p>
            <ul>
                <li><strong>DDR4:</strong> La más común en la actualidad, con mejoras en la eficiencia energética y rendimiento en comparación con versiones anteriores.</li>
                <li><strong>DDR5:</strong> La última generación de memoria RAM, ofreciendo velocidades aún mayores y mejor eficiencia energética, ideal para sistemas de alto rendimiento.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Instalación y Compatibilidad</h2>
            <p>La instalación de RAM es sencilla: simplemente se inserta en las ranuras correspondientes en la placa madre. Es importante asegurarse de que la RAM sea compatible con el tipo de placa base y procesador que estás usando.</p>
        </div>
        <div class="caracteristicas">
            <h2>Estética y Personalización</h2>
            <p>Algunos módulos de RAM incluyen iluminación RGB y diseños personalizados, lo que permite a los usuarios crear una estética única en su sistema.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Si eres un jugador o trabajas con aplicaciones pesadas, considera 16GB o más de RAM para un rendimiento óptimo.</li>
                <li>Asegúrate de que tu placa madre y procesador soporten la velocidad de RAM que planeas usar.</li>
                <li>Si deseas mejorar el rendimiento, opta por configuraciones de RAM en doble canal (2x) o cuádruple canal (4x).</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/memoriaRAM.png" alt="Imagen de un módulo de memoria RAM">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>

        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnAlmacenamiento.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="formulario-modal aprendizaje-modal">
    <h1>Almacenamiento</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>El almacenamiento es donde se guardan permanentemente los datos, como el sistema operativo, programas y archivos del usuario. Es crucial para el rendimiento general del sistema y la capacidad de almacenar información.</p>
        </div>
        <div class="caracteristicas">
            <h2>Tipos de Almacenamiento</h2>
            <ul>
                <li><strong>HDD (Disco Duro Mecánico):</strong> Utiliza platos giratorios y cabezales para leer y escribir datos. Es más económico y ofrece mayores capacidades de almacenamiento, pero es más lento en comparación con las opciones más modernas.</li>
                <li><strong>SSD (Unidad de Estado Sólido):</strong> Utiliza memoria flash para almacenar datos, lo que permite tiempos de acceso mucho más rápidos. Es ideal para mejorar el rendimiento del sistema, aunque a menudo es más caro por GB.</li>
                <li><strong>NVMe (Non-Volatile Memory Express):</strong> Un tipo de SSD que utiliza una interfaz más rápida y moderna que conecta directamente con la placa base a través de PCIe, lo que proporciona velocidades de lectura/escritura mucho mayores que los SSD SATA.</li>
                <li><strong>Híbridos (SSHD):</strong> Combinan un disco duro tradicional con una pequeña cantidad de memoria flash para almacenar archivos utilizados con frecuencia, ofreciendo un equilibrio entre velocidad y capacidad.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Capacidad de Almacenamiento</h2>
            <p>La capacidad se mide en gigabytes (GB) o terabytes (TB). Mientras más capacidad, más datos podrás almacenar. Los SSDs comunes van desde 120GB hasta 2TB, mientras que los HDDs pueden ofrecer hasta 10TB o más.</p>
        </div>
        <div class="caracteristicas">
            <h2>Velocidad de Lectura y Escritura</h2>
            <p>La velocidad de lectura y escritura determina qué tan rápido se pueden leer y escribir datos en el dispositivo de almacenamiento. Los SSD ofrecen velocidades mucho mayores que los HDD, lo que impacta directamente en la carga del sistema y el tiempo de apertura de aplicaciones.</p>
        </div>
        <div class="caracteristicas">
            <h2>Form Factor y Conexión</h2>
            <ul>
                <li><strong>3.5" y 2.5":</strong> Los discos duros suelen ser de 3.5", mientras que los SSDs son comúnmente de 2.5" para mayor flexibilidad en el diseño del sistema.</li>
                <li><strong>M.2:</strong> Un factor de forma más pequeño utilizado principalmente para SSDs NVMe, que conecta directamente a la placa base, ahorrando espacio y mejorando la velocidad.</li>
                <li><strong>SATA:</strong> Una interfaz común para conectar HDDs y SSDs a la placa base, aunque tiene limitaciones de velocidad en comparación con NVMe.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Durabilidad y Respaldo</h2>
            <p>Los SSDs son más resistentes a golpes y caídas que los HDDs, ya que no tienen partes móviles. Sin embargo, los HDDs pueden durar más tiempo en términos de ciclos de escritura. Es importante tener una estrategia de respaldo, especialmente en sistemas con un solo disco.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Para un mejor rendimiento general, combina un SSD para el sistema operativo y programas, y un HDD para almacenamiento masivo de archivos.</li>
                <li>Si la velocidad es lo más importante, opta por un SSD NVMe, que es mucho más rápido que los SSDs SATA.</li>
                <li>Considera los SSDs de mayor capacidad si planeas guardar muchos archivos grandes, como videos o juegos.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/almacenamiento.png" alt="Imagen de unidades de almacenamiento">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>

        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnGrafica.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
           <div class="formulario-modal aprendizaje-modal">
    <h1>Tarjeta Gráfica</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>La tarjeta gráfica (GPU) es responsable de generar y renderizar las imágenes que se muestran en el monitor. Es crucial para tareas que requieren procesamiento visual intensivo, como videojuegos, diseño gráfico, y edición de video.</p>
        </div>
        <div class="caracteristicas">
            <h2>Características de la Tarjeta Gráfica</h2>
            <ul>
                <li><strong>GPU (Unidad de Procesamiento Gráfico):</strong> El corazón de la tarjeta gráfica, que realiza todos los cálculos necesarios para renderizar las imágenes.</li>
                <li><strong>Memoria VRAM:</strong> Memoria dedicada a almacenar datos gráficos, como texturas, modelos y otros elementos visuales. Cuanta más memoria VRAM tenga la tarjeta, mejor podrá manejar texturas de alta resolución y modelos complejos.</li>
                <li><strong>Interfaz de Conexión:</strong> Las tarjetas gráficas modernas utilizan la interfaz PCIe (PCI Express), que proporciona un ancho de banda elevado para asegurar un rendimiento fluido.</li>
                <li><strong>Refrigeración:</strong> Las tarjetas gráficas suelen incluir sistemas de refrigeración con ventiladores o incluso soluciones líquidas para mantener las temperaturas bajas durante el uso intensivo.</li>
                <li><strong>Puertos de Salida:</strong> Ofrecen múltiples puertos de salida, como HDMI, DisplayPort y DVI, para conectar monitores y otros dispositivos de visualización.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Tipos de Tarjetas Gráficas</h2>
            <ul>
                <li><strong>Tarjetas Gráficas Integradas:</strong> Integradas en la placa base o el procesador, son adecuadas para tareas básicas como navegación web y multimedia, pero no son aptas para juegos o aplicaciones de alto rendimiento.</li>
                <li><strong>Tarjetas Gráficas Dedicadas:</strong> Son tarjetas independientes que proporcionan un rendimiento mucho mayor y son necesarias para juegos, edición de video o diseño 3D. Vienen con su propia memoria VRAM y un mayor poder de procesamiento.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Rendimiento y Resolución</h2>
            <p>El rendimiento de la tarjeta gráfica se mide en términos de capacidad de procesamiento de gráficos (FPS, o frames por segundo) y la resolución que puede soportar. Las tarjetas gráficas más potentes permiten jugar a 4K o realizar tareas gráficas de alta demanda sin problemas.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consumo de Energía</h2>
            <p>Las tarjetas gráficas dedicadas requieren una fuente de alimentación adecuada debido a su alto consumo de energía. Asegúrate de que tu fuente de alimentación tenga suficientes watts y los conectores adecuados para la tarjeta gráfica que elijas.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Si eres un jugador, elige una tarjeta gráfica dedicada con al menos 6GB de VRAM para un rendimiento fluido en juegos modernos.</li>
                <li>Verifica que la tarjeta gráfica sea compatible con la placa madre (es decir, que tenga una ranura PCIe disponible) y con tu fuente de alimentación.</li>
                <li>Considera la opción de tarjetas gráficas con refrigeración líquida si planeas realizar overclocking o si tu espacio es limitado.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/grafica.png" alt="Imagen de una tarjeta gráfica">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>


        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
    btnFuente.addEventListener('click', function () {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="formulario-modal aprendizaje-modal">
    <h1>Fuente de Alimentación</h1>
    <div class="contenedor-modal">
        <div class="caracteristicas">
            <h2>Función Principal</h2>
            <p>La fuente de alimentación (PSU) convierte la corriente alterna (AC) de la red eléctrica en corriente continua (DC) que los componentes de la computadora necesitan para funcionar. Es esencial para garantizar que el sistema reciba energía de manera estable y segura.</p>
        </div>
        <div class="caracteristicas">
            <h2>Características de la Fuente de Alimentación</h2>
            <ul>
                <li><strong>Potencia (Wattage):</strong> La potencia de la fuente se mide en vatios (W). Es importante elegir una fuente que proporcione suficiente energía para todos los componentes de la PC, considerando el procesador, la tarjeta gráfica, la memoria, y otros periféricos. Una fuente de 500W a 750W es común para sistemas estándar.</li>
                <li><strong>Certificación 80 Plus:</strong> Esta certificación indica la eficiencia energética de la fuente. Las fuentes con 80 Plus garantizan una alta eficiencia, lo que significa menos energía desperdiciada en forma de calor y un consumo energético más bajo.</li>
                <li><strong>Conectores:</strong> Las fuentes de alimentación vienen con diferentes conectores para alimentar todos los componentes. Esto incluye conectores ATX de 24 pines para la placa base, conectores de 4/8 pines para el procesador, y conectores PCIe para la tarjeta gráfica.</li>
                <li><strong>Refrigeración:</strong> La mayoría de las fuentes tienen ventiladores incorporados para mantener la temperatura bajo control. Algunas fuentes de gama alta incluyen ventiladores de mayor calidad o incluso sistemas de refrigeración líquida para mayor eficiencia.</li>
                <li><strong>Protecciones:</strong> Las fuentes modernas incluyen protecciones contra sobrecarga, sobrevoltaje, cortocircuitos y sobrecalentamiento, lo que ayuda a evitar daños en los componentes.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Tipos de Fuentes de Alimentación</h2>
            <ul>
                <li><strong>Fuente de Alimentación ATX:</strong> Es el tipo más común y se utiliza en la mayoría de las PC de escritorio. Se conecta a la placa base y otros componentes a través de cables de alimentación estándar.</li>
                <li><strong>Fuente de Alimentación SFX:</strong> Más compacta que la ATX, es ideal para PCs de tamaño pequeño o factores de forma compactos.</li>
                <li><strong>Fuente de Alimentación Modular:</strong> Ofrecen cables removibles, lo que permite usar solo los cables necesarios y reducir el desorden en el interior del gabinete. Son más costosas pero ofrecen una mejor gestión de cables.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <h2>Potencia y Requerimientos</h2>
            <p>El tamaño de la fuente de alimentación depende de la demanda energética de tu sistema. Una fuente con más potencia no siempre es necesaria, pero elegir una demasiado pequeña puede causar inestabilidad. Asegúrate de sumar la potencia de cada componente y dejar un margen de seguridad (unos 100W adicionales) para un rendimiento estable.</p>
        </div>
        <div class="caracteristicas">
            <h2>Consejos Prácticos</h2>
            <ul>
                <li>Si planeas realizar overclocking o agregar múltiples tarjetas gráficas, elige una fuente de alimentación más potente (800W o más).</li>
                <li>Asegúrate de que tu fuente de alimentación sea compatible con la cantidad y tipo de conectores necesarios para tu sistema (por ejemplo, si tienes una tarjeta gráfica que requiere conectores de 8 pines).</li>
                <li>Opta por una fuente con certificación 80 Plus para garantizar una mayor eficiencia energética y reducir el desperdicio de energía.</li>
            </ul>
        </div>
        <div class="caracteristicas">
            <img src="../img/fuente.png" alt="Imagen de una fuente de alimentación">
        </div>
    </div>
    <div class="acciones">
        <button class="cerrar-modal-eliminar" type="button">Cerrar</button>
    </div>
</div>

        `;

        setTimeout(() => {
            const eliminar = document.querySelector('.formulario-modal');
            eliminar.classList.add('animar');
        }, 0);

        modal.addEventListener('click', function (e) {
            //e.preventDefault();

            //Cerramos el modal
            if (e.target.classList.contains('cerrar-modal-eliminar')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modal.remove();
                }, 500);
            }
        })

        document.querySelector('body').appendChild(modal);
    })
})